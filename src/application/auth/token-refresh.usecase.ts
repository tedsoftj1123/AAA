import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { RedisRepository } from '../../infrastructure/redis/redis.repository';
import { JwtPort } from './spi/auth.spi';
import { TokenResponse } from './dto/auth.dto';

@Injectable()
export class TokenRefreshUseCase {
  constructor(
    private readonly redisRepository: RedisRepository,
    @Inject(JwtPort)
    private readonly jwtPort: JwtPort,
  ) {}

  async execute(refreshToken: string): Promise<TokenResponse> {
    const userId = await this.jwtPort.parseJwt(refreshToken);

    const token = await this.redisRepository.get('refresh.token' + userId);
    if (!token) {
      throw new NotFoundException('refresh token not found');
    }

    return await this.jwtPort.generateToken(userId);
  }
}
