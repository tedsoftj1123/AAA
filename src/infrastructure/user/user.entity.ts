import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tbl_user')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  accountId: string;

  @Column()
  password: string;

  @Column()
  name: string;
}
