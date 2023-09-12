import { Module } from '@nestjs/common';
import { AuthController } from '../../presentation/auth/auth.controller';
import { TokenRefreshUseCase } from '../../application/auth/token-refresh.usecase';
import { RedisCacheModule } from '../redis/redis.cache.module';
import { UserModule } from './user.module';
import { LoginUseCase } from '../../application/auth/login.usecase';

@Module({
  imports: [RedisCacheModule, UserModule],
  controllers: [AuthController],
  providers: [TokenRefreshUseCase, LoginUseCase],
})
export class AuthModule {}
