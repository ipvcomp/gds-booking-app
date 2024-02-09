import * as mongoose from 'mongoose';
const dotenv = require('dotenv');
dotenv.config();

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(process.env.DB),
  },
];