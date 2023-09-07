import { Body, Controller, Post } from '@nestjs/common';
import { SignupRequest } from './user.dto';
import { SignupUseCase } from '../../application/user/signup.usecase';

@Controller('users')
export class UserWebAdapter {
  constructor(private readonly signupUseCase: SignupUseCase) {}

  @Post('signup')
  async signup(@Body() request: SignupRequest) {
    return await this.signupUseCase.execute(request);
  }
}
