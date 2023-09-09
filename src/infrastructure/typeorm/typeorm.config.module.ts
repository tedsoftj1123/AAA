import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from '../user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '11111111',
      database: 'dmsport',
      entities: [],
      synchronize: true,
      autoLoadEntities: true,
    }),
    UserModule,
  ],
})
export class TypeormConfigModule {}