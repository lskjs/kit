import ready from '@lskjs/utils/polyfill';

import App from './App';
import config from './config/server';

ready();

export default App.start({ config })
  .then((app) => {
    global.app = app;
  })
  .catch((err) => {
    console.error('App.start error', err);
    throw err;
  });
