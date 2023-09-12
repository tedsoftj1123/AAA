import { ConflictException } from '@nestjs/common';

export class UserAlreadyExistsException {
  static EXCEPTION = new ConflictException('User Already Exists');
}
