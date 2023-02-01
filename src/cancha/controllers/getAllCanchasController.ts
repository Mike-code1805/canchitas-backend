import { NextFunction, Request, Response } from 'express';
import { validateAuthToken } from '../../auth/utils/tokenManager';
import { ApplicationError } from '../../shared/customErrors/ApplicationError';
import { getAllCanchasService } from '../services/getAllCanchasService';
import Logger from '../../shared/logger/appLogger';

export const getAllCanchasController = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const user = req.body.user;
    const Canchas = await getAllCanchasService(user.id);
    res.status(200).json(Canchas);
  } catch (error: any) {
    Logger.error('Error on get all Canchas controller', {
      instance: 'controllers',
      fn: 'getAllCanchasController',
      trace: error.message,
    });
    next(
      new ApplicationError(400, `Error getting the Canchas ${error.message}`)
    );
  }
};
