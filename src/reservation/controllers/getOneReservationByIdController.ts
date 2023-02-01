import { NextFunction, Request, Response } from 'express';
import { ApplicationError } from '../../shared/customErrors/ApplicationError';
import { getOneReservationByIdService } from '../services';
import Logger from '../../shared/logger/appLogger';

export const getOneReservationByIdController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const Reservation = await getOneReservationByIdService(
      req.params.id,
      req.body.user.id
    );
    res.status(200).json({ Reservation });
  } catch (error: any) {
    Logger.error('Error on get one Reservations controller', {
      instance: 'controllers',
      fn: 'getOneReservationByIdController',
      trace: error.message,
    });
    next(new ApplicationError(400, error.message));
  }
};
