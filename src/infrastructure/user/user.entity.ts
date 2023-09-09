import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tbl_user')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', { unique: true, length: 40 })
  email: string;

  @Column()
  password: string;

  @Column('varchar', { length: 10 })
  name: string;

  @Column('varchar')
  authority: string;
}

export const Authority = {
  USER: 'USER',
  BASKETBALL_MANAGER: 'BASKETBALL_MANAGER',
  SOCCER_MANAGER: 'SOCCER_MANAGER',
  VOLLEYBALL_MANAGER: 'VOLLEYBALL_MANAGER',
  BADMINTON_MANAGER: 'BADMINTON_MANAGER',
  ADMIN: 'ADMIN',
};
