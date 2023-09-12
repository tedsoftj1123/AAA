import { TokenResponse } from '../dto/auth.dto';

export interface JwtPort {
  generateToken(userId: string): Promise<TokenResponse>;
  parseJwt(token: string): Promise<string>;
}

export const JwtPort = Symbol('IJwtPort');
