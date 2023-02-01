import express, { Application, NextFunction, Request, Response } from 'express';
import authRouter from './auth/authRoutes';
import canchaRouter from './cancha/canchaRoutes';
import { ApplicationError } from './shared/customErrors/ApplicationError';
import swaggerUI from 'swagger-ui-express';
import { swaggerSpecs } from './config/swaggerConfig';

const app: Application = express();

app.use(express.json());

app.use('/auth', authRouter);
app.use('/api/cancha', canchaRouter);

app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerSpecs));
app.use(
  (err: ApplicationError, _req: Request, res: Response, next: NextFunction) => {
    res
      .status(err.statusCode ? err.statusCode : 500)
      .send({ message: err.message });
  }
);

export default app;
