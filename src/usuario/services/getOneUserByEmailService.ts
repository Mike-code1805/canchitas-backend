import { findOneResourceByField } from '../../shared/factory';
import Logger from '../../shared/logger/appLogger';
import { User } from '../entitys/user';
import { UserModel } from '../entitys/userModel';

export const getOneUserByCorreoService = async (
  correo: string
): Promise<User | null> => {
  try {
    const user: User | null = await findOneResourceByField(UserModel)({
      correo,
    });
    return user;
  } catch (error: any) {
    Logger.log(`error getting the user with correo: ${correo}`, {
      service: 'getOneUserByCorreoService',
      trace: error.message,
    });
    throw new Error(`error getting the User with correo${correo}`);
  }
};
