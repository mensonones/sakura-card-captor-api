import { DB_USER, PASSWORD, DATABASE, PORT } from '../../logindata';

export const URL_MONGO = {
  url: `mongodb://${DB_USER}:${PASSWORD}@ds153815.mlab.com:${PORT}/${DATABASE}`,
};
