import { NextFunction, Request, Response } from 'express';
import { authCreateUserAccountService } from '../services/user/authCreateUserAccountService';
import { authSigninUserService } from '../services/user/authSigninUserService';
import { ApplicationError } from '../../shared/customErrors/ApplicationError';
import { CreateUser } from '../../usuario/entitys/user';

export const signupAuthUserController = async (
  req: Request<{}, {}, CreateUser>,
  res: Response,
  next: NextFunction
) => {
  try {
    const password = req.body.password;
    await authCreateUserAccountService(req.body);
    const token = await authSigninUserService({
      correo: req.body.correo,
      password,
    });
    res.status(201).json(token);
  } catch (error: any) {
    next(new ApplicationError(400, error.message));
  }
};
