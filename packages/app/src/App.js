import BaseServerApp from '@lskjs/server/ServerApp';

import Api from './Api';
import models from './models';

export default class App extends BaseServerApp {
  getStatics() {
    return {
      ...super.getStatics(),
      '/storage': this.serverConfig.storage,
    };
  }
  modules = {
    webserver: [() => import('@lskjs/server/lskjs/webserver/server'), { Api, autorun: true }],
    models: [() => import('@lskjs/db/models'), { models }],
    auth: () => import('@lskjs/auth/server'),
    permit: () => import('@lskjs/permit/server'),
    upload: () => import('@lskjs/upload/server'),
    grant: () => import('@lskjs/grant/server'),
    reactApp: () => [
      import('@lskjs/reactapp/server'),
      {
        modules: {
          uapp: () => import('./Uapp'),
        },
      },
    ],
  };

  async run() {
    await super.run();
  }
}
