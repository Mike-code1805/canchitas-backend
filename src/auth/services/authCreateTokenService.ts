import Logger from '../../shared/logger/appLogger';
import { createAuthToken } from '../utils/tokenManager';
import { UserIdType } from '../../usuario/entitys/user';

export const authCreateTokenService = async (
  userId: string | UserIdType
): Promise<{ authToken: string }> => {
  try {
    return {
      authToken: createAuthToken({ id: userId }),
    };
  } catch (error: any) {
    Logger.error('Error creating tokens auth token', {
      instance: 'services',
      fn: 'authCreateTokenService',
      trace: error.message,
    });
    throw new Error(
      `'Error creando el toquen de autenticación' ${error.message}`
    );
  }
};
