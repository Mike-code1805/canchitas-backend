import express, { Application, NextFunction, Request, Response } from 'express';
import authRouter from './auth/authRoutes';
import cancheroRouter from './canchero/cancheroRoutes';
import canchaRouter from './cancha/canchaRoutes';
import reservationRouter from './reservation/reservationRoutes';
import swaggerUI from 'swagger-ui-express';
import { swaggerSpecs } from './config/swaggerConfig';
import cors from 'cors';

const app: Application = express();

app.use(cors());
app.use(express.json());

app.use('/auth', authRouter);
app.use('/api/canchero', cancheroRouter);
app.use('/api/cancha', canchaRouter);
app.use('/api/reservation', reservationRouter);

app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerSpecs));
app.use((err: any, _req: Request, res: Response, next: NextFunction) => {
  res
    .status(err.statusCode ? err.statusCode : 500)
    .send({ message: err.message });
});

export default app;
