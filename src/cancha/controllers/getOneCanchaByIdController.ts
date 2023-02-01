import { NextFunction, Request, Response } from 'express';
import { ApplicationError } from '../../shared/customErrors/ApplicationError';
import { getOneCanchaByIdService } from '../services';
import Logger from '../../shared/logger/appLogger';

export const getOneCanchaByIdController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log(req.body.user);
    const Cancha = await getOneCanchaByIdService(req.params.id);
    res.status(200).json(Cancha);
  } catch (error: any) {
    Logger.error('Error on get one Canchas controller', {
      instance: 'controllers',
      fn: 'getOneCanchaByIdController',
      trace: error.message,
    });
    next(new ApplicationError(400, 'error getting the Cancha'));
  }
};
