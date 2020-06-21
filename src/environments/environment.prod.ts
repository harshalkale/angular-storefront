import * as dotenv from 'dotenv';

dotenv.config({
  path: '../../.env',
});

export const environment = {
  production: true,
  firebase: Object.keys(process.env).reduce((acc, key) => {
    if (key.indexOf('FIREBASE_') >= 0) {
      acc = {
        ...acc,
        [key]: process.env[key],
      };
    }
    return acc;
  }, {}),
};
