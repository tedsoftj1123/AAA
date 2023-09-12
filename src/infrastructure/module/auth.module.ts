import { Module } from '@nestjs/common';
import { AuthController } from '../../presentation/auth/auth.controller';
import { TokenRefreshUseCase } from '../../application/auth/token-refresh.usecase';
import { RedisCacheModule } from '../redis/redis.cache.module';

@Module({
  imports: [RedisCacheModule],
  controllers: [AuthController],
  providers: [TokenRefreshUseCase],
})
export class AuthModule {}
