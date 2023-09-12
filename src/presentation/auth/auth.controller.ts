import { Controller, Post, Put, Headers } from '@nestjs/common';
import { TokenRefreshUseCase } from '../../application/auth/token-refresh.usecase';

@Controller('auth')
export class AuthController {
  constructor(private readonly tokenRefreshUseCase: TokenRefreshUseCase) {}

  @Post('token')
  async login() {
    console.log('a');
  }

  @Put('reissue')
  async reissue(@Headers('Refresh-Token') refreshToken?: string) {
    return await this.tokenRefreshUseCase.execute(refreshToken);
  }
}
