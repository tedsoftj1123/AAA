import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { UserPort } from '../user/spi/user.spi';
import { TokenResponse } from './dto/auth.dto';
import { UserNotFoundException } from '../user/exception/user.exceptions';
import { SecurityPort } from '../common/spi/security.spi';
import { JwtPort } from './spi/auth.spi';

@Injectable()
export class LoginUseCase {
  constructor(
    @Inject(UserPort)
    private readonly userPort: UserPort,
    @Inject(SecurityPort)
    private readonly securityPort: SecurityPort,
    @Inject(JwtPort)
    private readonly jwtPort: JwtPort,
  ) {}

  async execute(email: string, password: string): Promise<TokenResponse> {
    const user = await this.userPort.findByEmail(email);
    if (!user) {
      throw UserNotFoundException.EXCEPTION;
    }

    if (!(await this.securityPort.comparePassword(password, user.password))) {
      throw new UnauthorizedException('Invalid Password');
    }

    return await this.jwtPort.generateToken(user.id);
  }
}
