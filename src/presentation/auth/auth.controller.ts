import { Controller, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @Post('token')
  async login() {
    console.log('a');
  }
}
