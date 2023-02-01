import { NextFunction, Request, Response } from 'express';
import { validateAuthToken } from '../../auth/utils/tokenManager';
import { CreateCancha } from '../entity/cancha';
import { ApplicationError } from '../../shared/customErrors/ApplicationError';
import { createCanchaService } from '../services';
import Logger from '../../shared/logger/appLogger';

export const createCanchaController = async (
  req: Request<{}, {}, CreateCancha>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { authorization } = req.headers;
  if (!authorization) {
    return next(new ApplicationError(401, 'No token provided'));
  }
  const user: any = validateAuthToken(authorization);

  try {
    const newCancha = await createCanchaService({
      ...req.body,
      owner: user.id,
    });
    res.status(201).json(newCancha);
  } catch (error: any) {
    Logger.error('error on create Cancha controller', {
      instance: 'controller',
      service: 'createCanchaController',
      trace: error.message,
    });
    next(new ApplicationError(403, error.message));
  }
};
