import Logger from '../../../shared/logger/appLogger';
import { CreateUser } from '../../../usuario/entitys/user';
import { createUserService } from '../../../usuario/services/createUserService';

export const authCreateUserAccountService = async (
  UserRequest: CreateUser
): Promise<void> => {
  try {
    await createUserService(UserRequest);
  } catch (error: any) {
    Logger.error('Error creating User account', {
      instance: 'services',
      fn: 'authCreateUserAccountService',
      trace: error.message,
    });
    throw new Error(
      'Error creando la cuenta del usuario, pruebe cambiar el correo'
    );
  }
};
