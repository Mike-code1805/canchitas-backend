import Logger from '../../../shared/logger/appLogger';
import { authCreateTokenService } from '../authCreateTokenService';
import { User, LoginUser } from '../../../usuario/entitys/user';
import { authValidateUserService } from './authValidateUserService';

export type TokenResponse = {
  user: User;
  token: Token;
};

type Token = {
  authToken: string;
};

export const authSigninUserService = async (
  userRequest: LoginUser
): Promise<TokenResponse> => {
  try {
    const user = await authValidateUserService(userRequest);
    const token = await authCreateTokenService(user.id);
    return { user, token };
  } catch (error: any) {
    Logger.error('Error login User', {
      instance: 'services',
      fn: 'authSigninUserService',
      trace: error.message,
    });
    throw new Error(`${error.message}`);
  }
};
