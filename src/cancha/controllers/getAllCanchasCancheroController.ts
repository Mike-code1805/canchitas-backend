import { NextFunction, Request, Response } from 'express';
import { ApplicationError } from '../../shared/customErrors/ApplicationError';
import { getAllCanchasCancheroService } from '../services/getAllCanchasCancheroService';
import Logger from '../../shared/logger/appLogger';

export const getAllCanchasCancheroController = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const user = req.body.user;
    const Canchas = await getAllCanchasCancheroService(user.id);
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
