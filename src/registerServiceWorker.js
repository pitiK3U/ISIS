/* eslint-disable no-console */

import { register } from 'register-service-worker'

if (process.env.NODE_ENV === 'production') {
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready (registration) {
      console.log(
        'App is being served from cache by a service worker.\n' +
        'For more details, visit https://goo.gl/AFskqB'
      )
      global.REG = registration
    },
    cached (registration) {
      console.log('Content has been cached for offline use.')
      global.REG = registration
    },
    updated (registration) {
      console.log('New content is available; please refresh.')
      global.REG = registration
    },
    offline (registration) {
      console.log('No internet connection found. App is running in offline mode.')
      global.REG = registration
    },
    error (error) {
      console.error('Error during service worker registration:', error)
    }
  })
}
