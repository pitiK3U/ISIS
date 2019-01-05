<template lang="html">
  <nav class="container" :class="{ clicked: isMenuOpened }" >

      <div class="buttons" @click="goTo('home')">
        <i class="material-icons small">home</i>
      </div>

      <div class="buttons" @click="goTo('TimeTable')" >
        <i class="material-icons small">grid_on</i>
      </div>

      <div class="buttons" @click="goTo('home')" >
        <i class="material-icons small">event</i>
      </div>

      <div class="buttons" >
        <MenuIcon :isMenuOpened = "isMenuOpened" @toggle="$emit('toggle')" />
      </div>

  </nav>
</template>

<script>
import MenuIcon from './MenuIcon.vue'
export default {
  name: 'FAB',
  props: {
    isMenuOpened: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    goTo (page) {
      this.$router.push({ name: page })
    }
  },
  components: {
    MenuIcon
  }
} // TODO: Fix invisible routing
</script>

<style scoped lang="css">
.material-icons.small {
  display: block;
  padding-top: 8px;
  padding-left: 8px;
  width: 12px;
  font-size: 24px;
}

.container {
  bottom: 32px;
  position: fixed;
  margin: 1em;
  right: 16px;
}

.buttons {
  background-color: white;
  box-shadow: 0px 5px 11px -2px rgba(0, 0, 0, 0.18),
            0px 4px 12px -7px rgba(0, 0, 0, 0.15);
  border-radius: 50%;
  display: block;
  width: 56px;
  height: 56px;
  margin: 20px auto 0;
  position: relative;
  text-align: center;
  box-sizing: border-box;
  font-size: 26px;
  -webkit-transition: transform 200ms;
          transition: transform 200ms;
}

.buttons:last-child {
  z-index: 1000;
}

.buttons:active,
.buttons:focus,
.buttons:hover {
  box-shadow: 0 0 4px rgba(0,0,0,.14),
    0 4px 8px rgba(0,0,0,.28);
}

.buttons:not(:last-child) {
  width: 40px;
  height: 40px;
  margin: 20px auto 0;
  opacity: 0;
  -webkit-transform: translateY(50px);
      -ms-transform: translateY(50px);
          transform: translateY(50px);

}

.buttons:nth-child(1) {
  transition-duration: 280ms;
  -webkit-transition-duration: 280ms;
}

.buttons:nth-child(2) {
  transition-duration: 480ms;
  -webkit-transition-duration: 480ms;
}

.buttons:nth-child(3) {
  transition-duration: 680ms;
  -webkit-transition-duration: 680ms;
}

.container, .clicked
.buttons:not(:last-child) {
  opacity: 1;
  -webkit-transform: none;
      -ms-transform: none;
          transform: none;
  margin: 15px auto 0;
}
</style>
