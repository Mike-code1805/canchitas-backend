import { NextFunction, Request, Response } from 'express';
import { ApplicationError } from '../../shared/customErrors/ApplicationError';
import logger from '../../shared/logger/appLogger';
import { editOneCancheroService } from '../services';

export const editCancheroController = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const cancheroId = req.body.user.id;

    await editOneCancheroService(cancheroId, req.body);

    res.status(200).json({ message: 'edited' });
  } catch (error: any) {
    logger.error('Error editing the canchero cancheros', {
      instance: 'controllers',
      fn: 'editCancheroController',
      trace: error.message,
    });

    next(new ApplicationError(400, error.message));
  }
};
