import { Controller, Post, Put, Headers, Body } from '@nestjs/common';
import { TokenRefreshUseCase } from '../../application/auth/token-refresh.usecase';
import { LoginUseCase } from '../../application/auth/login.usecase';
import { LoginRequest } from '../user/user.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly tokenRefreshUseCase: TokenRefreshUseCase,
    private readonly loginUseCase: LoginUseCase,
  ) {}

  @Post('token')
  async login(@Body() request: LoginRequest) {
    return await this.loginUseCase.execute(request.email, request.password);
  }

  @Put('reissue')
  async reissue(@Headers('Refresh-Token') refreshToken: string) {
    return await this.tokenRefreshUseCase.execute(refreshToken);
  }
}
