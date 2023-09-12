export interface SecurityPort {
  encodeString(str: string): Promise<string>;
  comparePassword(raw: string, encoded: string): Promise<boolean>;
}

export const SecurityPort = Symbol('ISecurityPort');
