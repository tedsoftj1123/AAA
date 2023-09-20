import { NoticeEntity } from './notice.entity';
import { Notice } from '../../domain/notice/notice';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../user/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class NoticeMapper {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userTypeOrmRepository: Repository<UserEntity>,
  ) {}

  toDomain(entity: NoticeEntity): Notice {
    return {
      id: entity.id,
      title: entity.title,
      type: entity.type,
      content: entity.content,
      userId: entity.user.id,
    };
  }

  async toEntity(domain: Notice): Promise<NoticeEntity> {
    const user = await this.userTypeOrmRepository.findOneBy({
      id: domain.userId,
    });

    return {
      user: user,
      id: domain.id,
      title: domain.title,
      content: domain.content,
      type: domain.type,
    };
  }
}
