import { TokenResponse } from '../dto/auth.dto';

export interface JwtPort {
  generateToken(userId: string): Promise<TokenResponse>;
}

export const JwtPort = Symbol('IJwtPort');
