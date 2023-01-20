import Logger from '../../../shared/logger/appLogger';
import { LoginUser, User } from '../../../usuario/entitys/user';
import { validatePassword } from '../../utils/passwordManager';
import { getOneUserByEmailService } from '../../../usuario/services/getOneUserByEmailService';

export const authValidateUserService = async (
  userRequest: LoginUser
): Promise<User> => {
  try {
    const user = await getOneUserByEmailService(userRequest.correo);

    if (!user) throw new Error('No existe el usuario');

    const auth = await validatePassword(userRequest.password, user.password);
    if (!auth)
      throw new Error('El correo o contraseña del usuario es incorrecta');
    return user;
  } catch (error: any) {
    Logger.error('Error validating User credentials', {
      instance: 'services',
      fn: 'authValidateUserService',
      trace: error.message,
    });
    throw new Error(`${error.message}`);
  }
};
