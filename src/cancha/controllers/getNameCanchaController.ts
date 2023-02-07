import { NextFunction, Request, Response } from 'express';
import { ApplicationError } from '../../shared/customErrors/ApplicationError';
import Logger from '../../shared/logger/appLogger';
import { CanchaModel } from '../entity/CanchaModel';

export const getNameCanchaController = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const cancha = await CanchaModel.findOne({ nombre: req.body.nombre });
    if (cancha) {
      next(new ApplicationError(401, 'El nombre de la cancha ya existe'));
    }
    res.status(201).json({ message: 'valid' });
  } catch (error: any) {
    Logger.error('error getting Cancha controller', {
      instance: 'controller',
      service: 'getNameCanchaController',
      trace: error.message,
    });
    next(new ApplicationError(403, error.message));
  }
};
