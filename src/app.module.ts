import { Module } from '@nestjs/common';
import { UserModule } from './infrastructure/module/user.module';
import { TypeormConfigModule } from './infrastructure/typeorm/typeorm.config.module';
import { SecurityModule } from './infrastructure/security/security.module';
import { AuthModule } from './infrastructure/module/auth.module';

@Module({
  imports: [TypeormConfigModule, UserModule, SecurityModule, AuthModule],
})
export class AppModule {}
