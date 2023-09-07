import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { UserPersistenceAdapter } from './user.persistence.adapter';
import { SignupUseCase } from '../../application/user/signup.usecase';
import { UserWebAdapter } from '../../presentation/user/user.web.adapter';
import { UserPort } from '../../application/user/spi/user.spi';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [
    { provide: UserPort, useClass: UserPersistenceAdapter },
    SignupUseCase,
  ],
  controllers: [UserWebAdapter],
})
export class UserModule {}
