import { JwtPort } from '../../../application/auth/spi/auth.spi';
import { TokenResponse } from '../../../application/auth/dto/auth.dto';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { RedisRepository } from '../../redis/redis.repository';

@Injectable()
export class JwtAdapter implements JwtPort {
  constructor(
    private readonly jwtService: JwtService,
    private readonly redisRepository: RedisRepository,
  ) {}

  async generateToken(userId: string): Promise<TokenResponse> {
    const accessToken = await this.signJwtToken(userId, '1h', 'access');
    const refreshToken = await this.signJwtToken(userId, '2w', 'refresh');

    await this.redisRepository.set(
      'refresh.token' + userId,
      refreshToken,
      60 * 60 * 24 * 14,
    );

    return {
      accessToken,
      refreshToken,
    };
  }

  private async signJwtToken(userId: string, exp: string, typ: string) {
    return await this.jwtService.signAsync(
      { sub: userId, typ },
      { expiresIn: exp },
    );
  }
}
