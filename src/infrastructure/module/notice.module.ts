import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NoticeEntity } from '../notice/notice.entity';

@Module({
  imports: [TypeOrmModule.forFeature([NoticeEntity])],
  providers: [],
  controllers: [],
  exports: [],
})
export class NoticeModule {}
