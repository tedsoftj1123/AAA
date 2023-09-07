import { Inject, Injectable } from '@nestjs/common';
import { SignupRequest } from '../../presentation/user/user.dto';
import { UserAlreadyExistsException } from './exception/user.exceptions';
import { UserPort } from './spi/user.spi';

@Injectable()
export class SignupUseCase {
  constructor(
    @Inject(UserPort)
    private readonly userPort: UserPort,
  ) {}

  async execute(request: SignupRequest) {
    if (await this.userPort.findByAccountId(request.account)) {
      throw UserAlreadyExistsException.EXCEPTION;
    }

    const user = {
      accountId: request.account,
      password: request.password,
      name: request.name,
    };

    await this.userPort.save(user);
  }
}
