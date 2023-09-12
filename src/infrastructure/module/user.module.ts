import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../user/user.entity';
import { UserPersistenceAdapter } from '../user/user.persistence.adapter';
import { SignupUseCase } from '../../application/user/signup.usecase';
import { UserWebAdapter } from '../../presentation/user/user.web.adapter';
import { UserPort } from '../../application/user/spi/user.spi';

const userPort = { provide: UserPort, useClass: UserPersistenceAdapter };
@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [userPort, SignupUseCase],
  controllers: [UserWebAdapter],
  exports: [userPort],
})
export class UserModule {}
