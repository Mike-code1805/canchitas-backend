import { connectionOnDatabase } from './config/dbConfig';
import dotenv from 'dotenv';
import app from './app';

dotenv.config();
connectionOnDatabase(`${process.env.MONGO_URI}`);

app.listen(process.env.PORT || 3000, () =>
  console.log(`Im listening in port ${process.env.PORT}`)
);
