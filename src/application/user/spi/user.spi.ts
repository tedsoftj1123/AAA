import { User } from '../../../domain/user/user';

export interface UserPort {
  save(user: User): Promise<User>;

  findByEmail(accountId: string): Promise<User>;
}

export const UserPort = Symbol('IUserPort');
