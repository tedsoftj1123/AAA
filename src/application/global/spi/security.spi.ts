export interface SecurityPort {
  encodeString(str: string): Promise<string>;
}

export const SecurityPort = Symbol('ISecurityPort');
