import jwt, { UserIdJwtPayload } from 'jsonwebtoken';

export const createAuthToken = (payload: {}, secret?: string): string => {
  return jwt.sign(payload, `${process.env.JWT_AUTH_SECRET}${secret}`, {
    expiresIn: '60d',
  });
};

export const validateAuthToken = (token: string, secret?: string) => {
  try {
    return jwt.verify(
      token,
      `${process.env.JWT_AUTH_SECRET}${secret}`
    ) as UserIdJwtPayload;
  } catch (error: any) {
    throw new Error('La firma es inválida');
  }
};
