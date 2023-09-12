import { Global, Module } from '@nestjs/common';
import { SecurityPort } from '../../application/common/spi/security.spi';
import { SecurityAdapter } from './security.adapter';
import { RedisCacheModule } from '../redis/redis.cache.module';
import { JwtPort } from '../../application/auth/spi/auth.spi';
import { JwtAdapter } from './jwt/jwt.adapter';
import { JwtModule } from '@nestjs/jwt';

@Global()
@Module({
  imports: [
    RedisCacheModule,
    JwtModule.register({
      global: true,
      secret: 'dmsport',
    }),
  ],
  providers: [
    { provide: SecurityPort, useClass: SecurityAdapter },
    { provide: JwtPort, useClass: JwtAdapter },
  ],
  exports: [
    { provide: SecurityPort, useClass: SecurityAdapter },
    { provide: JwtPort, useClass: JwtAdapter },
  ],
})
export class SecurityModule {}
