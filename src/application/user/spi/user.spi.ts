import { User } from '../../../domain/user/user';

export interface UserPort {
  save(user: User): Promise<User>;

  findByAccountId(accountId: string): Promise<User>;
}

export const UserPort = Symbol('IService');
