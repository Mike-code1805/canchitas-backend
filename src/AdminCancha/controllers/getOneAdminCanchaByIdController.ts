import { NextFunction, Request, Response } from 'express';
import { ApplicationError } from '../../customErrors/ApplicationError';
import { getOneAdmincCanchaByIdService } from '../services/getOneAdmincCanchaByIdService';

export const getOneAdminCanchaByIdController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log(req.params.id);
    const AdminCancha = await getOneAdmincCanchaByIdService(req.params.id);
    res.status(200).json(AdminCancha);
  } catch (error: any) {
    next(new ApplicationError(400, 'error getting the adminCancha'));
  }
};
