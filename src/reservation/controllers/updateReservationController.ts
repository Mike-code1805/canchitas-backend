import { NextFunction, Request, Response } from 'express';
import { updateReservationService } from '../services';
import Logger from '../../shared/logger/appLogger';
import { ApplicationError } from '../../shared/customErrors/ApplicationError';

export const updateReservationController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users = await updateReservationService(req.params.id, req.body);
    res.status(200).json({ message: 'updated' });
  } catch (error: any) {
    Logger.error('error', 'hello', { message: error.message });
    next(new ApplicationError(400, error.message));
  }
};
