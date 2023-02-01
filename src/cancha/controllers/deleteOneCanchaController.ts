import { NextFunction, Request, Response } from 'express';
import { validateAuthToken } from '../../auth/utils/tokenManager';
import { ApplicationError } from '../../shared/customErrors/ApplicationError';
import { deleteOneCanchaService } from '../services/deleteOneCanchaService';
import Logger from '../../shared/logger/appLogger';

export const deleteOneCanchaController = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id } = req.params;
    const { authorization } = req.headers;
    if (!authorization) {
      return next(new ApplicationError(401, 'No token provided'));
    }
    const user: any = validateAuthToken(authorization);
    const result = await deleteOneCanchaService(id, user.id);
    res.status(200).json({ succes: result });
  } catch (error: any) {
    Logger.error('Error on get all Canchas controller', {
      instance: 'controllers',
      fn: 'deleteOneCanchaController',
      trace: error.message,
    });
    next(
      new ApplicationError(400, `Error deleting the Canchas ${error.message}`)
    );
  }
};
