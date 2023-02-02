import { encryptPassword } from '../../auth/utils/passwordManager';
import Logger from '../../shared/logger/appLogger';
import { CreateUser, User } from '../entitys/user';
import { UserModel } from '../entitys/userModel';
import { createResource } from '../../shared/factory';

export const createUserService = async (
  userRequest: CreateUser
): Promise<User> => {
  try {
    userRequest['password'] = await encryptPassword(userRequest.password);
    const user = await createResource(UserModel)(userRequest);
    return user as User;
  } catch (error: any) {
    Logger.error(`error creating User with email ${userRequest.correo}`, {
      service: 'createUserService',
      trace: error.message,
    });
    throw new Error(`error creating User with email ${userRequest.correo}`);
  }
};
