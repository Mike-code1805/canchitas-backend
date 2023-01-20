import { NextFunction, Request, Response } from 'express';
import { ObjectSchema } from 'yup';
import { ApplicationError } from '../customErrors/ApplicationError';
import Logger from '../logger/appLogger';

export const bodyRequestValidator =
  (schema: ObjectSchema<any>) =>
  async (req: Request, _res: Response, next: NextFunction) => {
    try {
      await schema.validate({
        body: req.body,
        params: req.params,
      });
      next();
    } catch (error: any) {
      Logger.error(`error validating body request ${error.message}`, {
        instance: 'middlewares schema validation',
        fn: 'bodyRequestValidator',
        trace: error.message,
      });

      next(new ApplicationError(400, error.message));
    }
  };
