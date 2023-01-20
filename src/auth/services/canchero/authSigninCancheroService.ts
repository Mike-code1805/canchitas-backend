import { LoginCanchero, Canchero } from '../../../canchero/entity/canchero';
import { authValidateCancheroService } from './authValidateCancheroService';
import { authCreateTokenService } from '../authCreateTokenService';
import Logger from '../../../shared/logger/appLogger';

export type TokenResponse = {
  canchero: Canchero;
  tokens: Token;
};

type Token = {
  authToken: string;
};

export const authSigninCancheroService = async (
  CancheroRequest: LoginCanchero
): Promise<TokenResponse> => {
  try {
    const canchero = await authValidateCancheroService(CancheroRequest);
    const tokens = await authCreateTokenService(canchero.id);
    return { canchero, tokens };
  } catch (error: any) {
    Logger.error('Error login Canchero', {
      instance: 'services',
      fn: 'authSigninCancheroService',
      trace: error.message,
    });
    throw new Error(`${error.message}`);
  }
};
