import Logger from '../../../shared/logger/appLogger';
import { CreateUser } from '../../../usuario/entitys/user';
import { createUserService } from '../../../usuario/services/createUserService';
import { getOneCancheroByEmailService } from '../../../canchero/services/getOneCancheroByEmailService';

export const authCreateUserAccountService = async (
  userRequest: CreateUser
): Promise<void> => {
  try {
    const canchero = await getOneCancheroByEmailService(userRequest.correo);
    if (canchero) throw new Error('Este correo ya existe');
    await createUserService(userRequest);
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
