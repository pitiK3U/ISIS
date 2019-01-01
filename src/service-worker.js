if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`)

  workbox.core.setCacheNameDetails({
    prefix: 'my-app',
    suffix: 'v1',
    precache: 'install-time',
    runtime: 'run-time'
  })

  // Will print 'my-app-install-time-v1'
  console.log(workbox.core.cacheNames.precache)

  // Will print 'my-app-run-time-v1'
  console.log(workbox.core.cacheNames.runtime)

  workbox.precaching.precacheAndRoute(self.__precacheManifest || [])
} else {
  console.log(`Boo! Workbox didn't load 😬`)
}
