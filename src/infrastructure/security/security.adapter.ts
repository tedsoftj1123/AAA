import { Injectable } from '@nestjs/common';
import { SecurityPort } from '../../application/global/spi/security.spi';
import * as bcrypt from 'bcrypt';

@Injectable()
export class SecurityAdapter implements SecurityPort {
  async encodeString(str: string): Promise<string> {
    const salt = await bcrypt.genSalt();
    return await bcrypt.hash(str, salt);
  }
}