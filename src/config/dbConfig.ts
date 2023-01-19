import mongoose from 'mongoose';

export const connectionOnDatabase = (dbURI: string) => {
  mongoose
    .connect(dbURI)
    .then(() => {
      console.log('Connected');
    })
    .catch((err) => {
      console.log(err);
    });

  mongoose.connection.on('error', () => {
    console.log('Error on DB');
  });
  mongoose.connection.once('open', () => {
    console.log('Connected successfully');
  });
};
