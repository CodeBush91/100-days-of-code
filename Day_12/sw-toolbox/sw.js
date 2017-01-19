(global => {
  'use strict';

  importScripts('./bower_components/sw-toolbox/sw-toolbox.js');

  global.toolbox.options.debug = true;

  toolbox.router.get('/images/(.*)', global.toolbox.cacheFirst, {
    cache: {
          name: 'svg',
          maxEntries: 10,
          maxAgeSeconds: 86400 
        }
  });


  toolbox.router.get('/(.*)', global.toolbox.cacheFirst, {
    cache: {
      name: 'googleapis',
      maxEntries: 10,
      maxAgeSeconds: 86400 
    },
    origin: /\.googleapis\.com$/,

    networkTimeoutSeconds: 2
  });

  
  global.toolbox.router.default = global.toolbox.networkFirst;

  global.addEventListener('install', event => event.waitUntil(global.skipWaiting()));
  global.addEventListener('activate', event => event.waitUntil(global.clients.claim()));
})(self);