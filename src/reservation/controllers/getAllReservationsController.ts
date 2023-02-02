import { NextFunction, Request, Response } from 'express';
import { validateAuthToken } from '../../auth/utils/tokenManager';
import { ApplicationError } from '../../shared/customErrors/ApplicationError';
import { getAllReservationsService } from '../services';
import Logger from '../../shared/logger/appLogger';

export const getAllReservationsController = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const user = req.body.user;
    const Reservations = await getAllReservationsService(user.id);
    res.status(200).json(Reservations);
  } catch (error: any) {
    Logger.error('Error on get all Reservations controller', {
      instance: 'controllers',
      fn: 'getAllReservationsController',
      trace: error.message,
    });
    next(
      new ApplicationError(400, `Error getting the Reservations ${error.message}`)
    );
  }
};
