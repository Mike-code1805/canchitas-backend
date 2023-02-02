import { NextFunction, Request, Response } from 'express';
import { LoginCanchero } from '../../canchero/entity/canchero';
import { authSigninCancheroService } from '../services/canchero/authSigninCancheroService';
import { ApplicationError } from '../../shared/customErrors/ApplicationError';

export const signinAuthCancheroController = async (
  req: Request<{}, {}, LoginCanchero>,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = await authSigninCancheroService(req.body);
    res.status(200).json(token);
  } catch (error: any) {
    next(new ApplicationError(401, error.message));
  }
};
