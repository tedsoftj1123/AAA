import { HttpException, HttpStatus } from '@nestjs/common';

export class UserException extends HttpException {
  constructor(message: string, httpStatus: HttpStatus) {
    super(message, httpStatus);
  }
}

export class UserAlreadyExistsException {
  static EXCEPTION = new UserException(
    'User Already Exists',
    HttpStatus.CONFLICT,
  );
}