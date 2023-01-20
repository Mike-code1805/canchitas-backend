import { NextFunction, Request, Response } from 'express';
import { authSigninUserService } from '../services/user/authSigninUserService';
import { LoginUser } from '../../usuario/entitys/user';
import { ApplicationError } from '../../shared/customErrors/ApplicationError';

export const signinAuthUserController = async (
  req: Request<{}, {}, LoginUser>,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = await authSigninUserService(req.body);
    res.status(200).json(token);
  } catch (error: any) {
    next(new ApplicationError(401, error.message));
  }
};
