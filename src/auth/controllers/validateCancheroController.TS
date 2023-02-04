import { NextFunction, Request, Response } from 'express';
import { ApplicationError } from '../../shared/customErrors/ApplicationError';
import { authValidateCancheroAccount } from '../services/canchero/authValidateCancheroAccount';

export const validateCancheroController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { authorization } = req.headers;
    const token = await authValidateCancheroAccount(authorization!);
    res.status(200).json(token);
  } catch (error: any) {
    next(new ApplicationError(400, error.message));
  }
};
