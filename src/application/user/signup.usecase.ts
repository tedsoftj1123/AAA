import { Inject, Injectable } from '@nestjs/common';
import { SignupRequest } from '../../presentation/user/user.dto';
import { UserAlreadyExistsException } from './exception/user.exceptions';
import { UserPort } from './spi/user.spi';
import { Authority } from '../../infrastructure/user/user.entity';
import { SecurityPort } from '../global/spi/security.spi';
import { JwtPort } from '../auth/spi/auth.spi';

@Injectable()
export class SignupUseCase {
  constructor(
    @Inject(UserPort)
    private readonly userPort: UserPort,
    @Inject(SecurityPort)
    private readonly securityPort: SecurityPort,
    @Inject(JwtPort)
    private readonly jwtPort: JwtPort,
  ) {}

  async execute(request: SignupRequest) {
    if (await this.userPort.findByEmail(request.email)) {
      throw UserAlreadyExistsException.EXCEPTION;
    }

    const savedUser = await this.userPort.save({
      email: request.email,
      password: await this.securityPort.encodeString(request.password),
      name: request.name,
      authority: Authority.USER,
    });

    return await this.jwtPort.generateToken(savedUser.id);
  }
}
