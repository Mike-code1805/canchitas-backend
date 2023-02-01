import { NextFunction, Request, Response } from 'express';
import { ApplicationError } from '../../shared/customErrors/ApplicationError';
import { deleteOneReservationService } from '../services';
import Logger from '../../shared/logger/appLogger';

export const deleteOneReservationController = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id } = req.params;
    const result = await deleteOneReservationService(id, req.body.user.id);
    res.status(200).json({ succes: result });
  } catch (error: any) {
    Logger.error('Error on get all Reservations controller', {
      instance: 'controllers',
      fn: 'deleteOneReservationController',
      trace: error.message,
    });
    next(
      new ApplicationError(400, error.message)
    );
  }
};
