import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserEntity } from '../user/user.entity';

@Entity('tbl_notice')
export class NoticeEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', { length: 20 })
  title: string;

  @Column('varchar', { length: 100 })
  content: string;

  @Column('varchar', { length: 10 })
  type: string;

  @ManyToOne(() => UserEntity)
  user: UserEntity;
}
