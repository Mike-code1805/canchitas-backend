import { NextFunction, Request, Response } from 'express';
import { ApplicationError } from '../../shared/customErrors/ApplicationError';
import { createReservationService } from '../services';
import Logger from '../../shared/logger/appLogger';

export const createReservationController = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    console.log(req.body.start);
    const reservation = await createReservationService({
      ...req.body,
      owner: req.body.user.id,
    });
    res.status(201).json({ reservation });
  } catch (error: any) {
    Logger.error('error on create Reservation controller', {
      instance: 'controller',
      service: 'createReservationController',
      trace: error.message,
    });
    next(new ApplicationError(403, error.message));
  }
};
