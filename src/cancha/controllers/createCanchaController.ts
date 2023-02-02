import { NextFunction, Request, Response } from 'express';
import { ApplicationError } from '../../shared/customErrors/ApplicationError';
import { createCanchaService } from '../services';
import Logger from '../../shared/logger/appLogger';

export const createCanchaController = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const cancha = await createCanchaService({
      ...req.body,
      owner: req.body.user.id,
    });
    res.status(201).json({ cancha });
  } catch (error: any) {
    Logger.error('error on create Cancha controller', {
      instance: 'controller',
      service: 'createCanchaController',
      trace: error.message,
    });
    next(new ApplicationError(403, error.message));
  }
};
