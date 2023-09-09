import { Inject, Injectable } from '@nestjs/common';
import { SignupRequest } from '../../presentation/user/user.dto';
import { UserAlreadyExistsException } from './exception/user.exceptions';
import { UserPort } from './spi/user.spi';
import { Authority } from '../../infrastructure/user/user.entity';
import { User } from '../../domain/user/user';

@Injectable()
export class SignupUseCase {
  constructor(
    @Inject(UserPort)
    private readonly userPort: UserPort,
  ) {}

  async execute(request: SignupRequest) {
    if (await this.userPort.findByEmail(request.email)) {
      throw UserAlreadyExistsException.EXCEPTION;
    }

    const user: User = {
      email: request.email,
      password: request.password,
      name: request.name,
      authority: Authority.USER,
    };

    await this.userPort.save(user);
  }
}