import { NextFunction, Request, Response } from 'express';
import { ApplicationError } from '../../shared/customErrors/ApplicationError';
import { authCreateCancheroAccountService } from '../services/canchero/authCreateCancheroAccountService';
import { CreateCanchero } from '../../canchero/entity/canchero';
import { authSigninCancheroService } from '../services/canchero/authSigninCancheroService';

export const signupAuthCancheroController = async (
  req: Request<{}, {}, CreateCanchero>,
  res: Response,
  next: NextFunction
) => {
  try {
    const password = req.body.password;
    await authCreateCancheroAccountService(req.body);
    const token = await authSigninCancheroService({
      correo: req.body.correo,
      password,
    });
    res.status(201).json(token);
  } catch (error: any) {
    next(new ApplicationError(400, error.message));
  }
};
