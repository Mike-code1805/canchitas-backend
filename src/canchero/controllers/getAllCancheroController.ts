import { NextFunction, Request, Response } from 'express';
import { ApplicationError } from '../../shared/customErrors/ApplicationError';
import { getAllCancheroService } from '../services';

export const getAllCancheroController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const cancheros = await getAllCancheroService(req.params.id);
    res.status(200).json(cancheros);
  } catch (error: any) {
    next(new ApplicationError(400, error.message));
  }
};
