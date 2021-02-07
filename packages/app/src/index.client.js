// eslint-disable-next-line simple-import-sort/imports
import ready from '@lskjs/utils/polyfill';
import ReactApp from '@lskjs/reactapp/client';

import config from './config/client';
import * as serviceWorker from './serviceWorker';

ready();

const main = async () => {
  const app = await ReactApp.create({
    config,
    modules: {
      uapp: () => import('./Uapp'),
    },
  });
  global.app = app;
  global.uapp = app.uapp;
  window.onload = () => app.start();
  return app;
};

serviceWorker.unregister();

export default main().catch((err) => {
  // eslint-disable-next-line no-console
  console.error('App.start error', err);
});
