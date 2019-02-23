<template lang="html">
  <nav class="container" :class="{ clicked: isMenuOpened }" >

      <div class="buttons" @click="goTo('home')">
        <i class="material-icons small">home</i>
      </div>

      <div class="buttons" @click="goTo('TimeTable')" >
        <i class="material-icons small">grid_on</i>
      </div>

      <div class="buttons" @click="goTo('Settings')" >
        <i class="material-icons small">settings</i>
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
}
</script>

<style scoped lang="css">
.material-icons.small {
  margin-top: 8px;
  font-size: 24px;
}

.container {
  position: fixed;
  bottom: 1rem;
  right: 1rem;
}

@media(min-width: 1024px) {
    .container {
    position: fixed;
    bottom: 1.5rem;
    right: 1.5rem;
  }
}

.buttons {
  background-color: white;
  box-shadow: 0 3px 5px -1px rgba(0,0,0,.2),
              0 6px 10px 0 rgba(0,0,0,.14),
              0 1px 18px 0 rgba(0,0,0,.12);
  border-radius: 50%;
  width: 56px;
  height: 56px;
  margin: 20px auto 0;
  position: relative;
}

.buttons:focus,
.buttons:hover {
  box-shadow: 0 5px 5px -3px rgba(0,0,0,.2),
              0 8px 10px 1px rgba(0,0,0,.14),
              0 3px 14px 2px rgba(0,0,0,.12);
}

.buttons:active {
  box-shadow: 0 7px 8px -4px rgba(0,0,0,.2),
              0 12px 17px 2px rgba(0,0,0,.14),
              0 5px 22px 4px rgba(0,0,0,.12);
}

.buttons:last-child {
  z-index: 1000;
}

.buttons:not(:last-child) {
  width: 40px;
  height: 40px;
  margin-top: 15px;
  pointer-events: none;
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
  pointer-events: auto;
  -webkit-transform: none;
      -ms-transform: none;
          transform: none;
}
</style>
