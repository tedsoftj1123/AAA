import { UserPort } from '../../application/user/spi/user.spi';
import { User } from '../../domain/user/user';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';

@Injectable()
export class UserPersistenceAdapter implements UserPort {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userTypeOrmRepository: Repository<UserEntity>,
  ) {}
  async findByAccountId(accountId: string): Promise<User> {
    return this.userTypeOrmRepository.findOneBy({ accountId });
  }

  async save(user: User): Promise<User> {
    return this.userTypeOrmRepository.save(user);
  }
}
