import { ApplicationError } from '../../customErrors/ApplicationError';
import { NextFunction, Request, Response } from 'express';
import { AdminCancha } from '../entity/types/AdminCanchaModel';
import { createAdminCanchaService } from '../services/createAdminCanchaService';

export const createAdminCanchaController = async (
  req: Request<{}, {}, AdminCancha>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const {
    dni,
    nombres,
    apellidos,
    nacimiento,
    sexo,
    telefono,
    avatar,
    correo,
    contraseña,
    owner,
    isValid,
  } = req.body;
  try {
    const newAdminCancha = await createAdminCanchaService({
      dni,
      nombres,
      apellidos,
      nacimiento,
      sexo,
      telefono,
      avatar,
      correo,
      contraseña,
      owner,
      isValid,
    });
    res.status(201).json(newAdminCancha);
  } catch (error: any) {
    next(new ApplicationError(403, error.message));
  }
};
