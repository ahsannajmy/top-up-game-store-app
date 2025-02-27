export interface JWTPayload {
  role: string;
  id: string;
  email: string;
  username: string;
  sub: string;
  iat: number;
  exp: number;
}
