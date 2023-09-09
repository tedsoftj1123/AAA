import { Global, Module } from '@nestjs/common';
import { SecurityPort } from '../../application/global/spi/security.spi';
import { SecurityAdapter } from './security.adapter';

@Global()
@Module({
  providers: [{ provide: SecurityPort, useClass: SecurityAdapter }],
  exports: [{ provide: SecurityPort, useClass: SecurityAdapter }],
})
export class SecurityModule {}
