import { ConflictException, NotFoundException } from '@nestjs/common';

export class UserAlreadyExistsException {
  static EXCEPTION = new ConflictException('User Already Exists');
}

export class UserNotFoundException {
  static EXCEPTION = new NotFoundException('User Not Found');
}
