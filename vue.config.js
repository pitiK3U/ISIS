// Inside of webpack.config.js:

// vue.config.js
module.exports = {
  // options...
  pwa: {
    name: 'My App',
    themeColor: '#4DBA87',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',

    // configure the workbox plugin
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      // skipWaiting: true,
      swSrc: './src/service-worker.js'
      /* runtimeCaching: [{
        // Match any same-origin request that contains 'api'.
        urlPattern: /./,
        // Apply a network-first strategy.
        handler: 'networkFirst',
        options: {
          // Use a custom cache name for this route.
          cacheName: 'my-api-cache',
          // Configure custom cache expiration.
          expiration: {
            maxEntries: 10,
            maxAgeSeconds: 60 * 60 * 24
          }
        }
      }] */
      // ...other Workbox options...
    }
  }
}
