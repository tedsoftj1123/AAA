import { Module } from '@nestjs/common';
import { UserModule } from './infrastructure/user/user.module';
import { TypeormConfigModule } from './infrastructure/typeorm/typeorm.config.module';

@Module({
  imports: [TypeormConfigModule, UserModule],
})
export class AppModule {}
