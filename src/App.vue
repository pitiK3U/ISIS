<template>
  <div id="app">
    <header>
      <span></span>
    </header>
    <main>
      <router-view></router-view>
      <FAB :isMenuOpened = "isMenuOpened" @toggle = "toggle"/>
    </main>
  </div>
</template>

<script>
import SchoolHours from './assets/default.json'
const FAB = () => import(/* webpackChunkName: "FAB" */ './components/FloatingActionButton.vue')
const moment = require('moment')
export default {
  name: 'app',
  data () {
    return {
      json: ['07:00:00', '07:45:00', '07:55:00', '08:40:00', '08:50:00', '09:35:00', '09:50:00', '10:35:00', '10:45:00', '11:30:00', '12:00:00', '12:45:00', '12:55:00', '13:40:00', '13:50:00', '14:35:00'],
      isMenuOpened: false,
      time: moment(),
      width: null,
      checkTime: null,
      index: null,
      timeNotified: moment('00:00:00', 'HH:mm:ss')
    }
  },
  methods: {
    toggle: function () {
      this.isMenuOpened = !this.isMenuOpened
    },
    updateTime: function () {
      this.time = moment()
      this.check()
      // console.log(this.checkTime.format('HH:mm'), this.time.format('HH:mm'))
      if ((this.time.format('HH:mm') === this.checkTime.format('HH:mm')) &&
          (this.timeNotified.format('HH:mm') !== this.checkTime.format('HH:mm'))) {
        this.notify()
        this.timeNotified = moment()
      }
    },
    check: function () {
      for (let index in this.json) {
        const start = moment(this.json[index], 'HH:mm:ss')
        const end = moment(this.json[++index], 'HH:mm:ss')
        if (this.time.isBetween(start, end)) {
          this.index = index
          this.width = (this.time.toDate().getTime() - start.toDate().getTime()) /
                       (end.toDate().getTime() - start.toDate().getTime()) * 100 + '%'
          this.checkTime = end.subtract(5, 'minutes')
          break
        } else this.width = 0
      }
      document.getElementsByTagName('span')[0].style.width = this.width
    },
    notify: function () { // FIXME: Notification on mobile
      if (Notification.permission === 'granted') {
        navigator.serviceWorker.ready.then(registration => {
          const day = this.time.day() - 1
          registration.showNotification(this.time.format('HH:mm:ss'), {
            body: 'Next subject is ' +
              SchoolHours[day][Math.round(this.index / 2)].predmet +
              ' in ' +
              SchoolHours[day][Math.round(this.index / 2)].mistnost +
              ', starts: ' + this.json[this.index] })
        })
      }
    }
  },
  components: {
    FAB
  },
  created () {
    if (Notification.permission !== 'denied') {
      Notification.requestPermission()
    }
    this.$options.interval = setInterval(this.updateTime, 1000)
  },
  beforeDestroy () {
    clearInterval(this.$options.interval)
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
  margin-top: 40px;
}

header {
  margin: 0;
  height: 56px;
  background-color: #35495E;
  color: #ffffff;
  span {
    display: block;
    position: relative;
    box-sizing: border-box;
    background-color: green;
    height: 100%;
  }
}
</style>
