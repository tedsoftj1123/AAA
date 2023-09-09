import { Module } from '@nestjs/common';
import { UserModule } from './infrastructure/user/user.module';
import { TypeormConfigModule } from './infrastructure/typeorm/typeorm.config.module';
import { SecurityModule } from './infrastructure/security/security.module';

@Module({
  imports: [TypeormConfigModule, UserModule, SecurityModule],
})
export class AppModule {}
