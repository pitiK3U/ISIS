<template lang="html">
  <div @click = "$emit('toggle')" >
    <label class="menu-open-button" :class="{ MenuOpened: isMenuOpened }">
      <span class="lines line-1"></span>
      <span class="lines line-2"></span>
      <span class="lines line-3"></span>
    </label>
  </div>
</template>

<script>
export default {
  name: 'MenuIcon',
  props: {
    isMenuOpened: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style scoped lang="css">
.menu-open-button {
   border-radius: 50%;
   width: 56px;
   height: 56px;
   margin-left: -28px;
   position: absolute;
   text-align: center;
   line-height: 56px;
   -webkit-transform: translate3d(0, 0, 0);
   transform: translate3d(0, 0, 0);
   -webkit-transition: -webkit-transform ease-out 200ms;
   transition: -webkit-transform ease-out 200ms;
   transition: transform ease-out 200ms;
   transition: transform ease-out 200ms, -webkit-transform ease-out 200ms;
}

.lines {
 width: 24px;
 height: 3px;
 background: #596778;
 display: block;
 position: absolute;
 top: 50%;
 left: 50%;
 margin-left: -12.5px;
 margin-top: -1.5px;
 -webkit-transition: -webkit-transform 200ms;
 transition: -webkit-transform 200ms;
 transition: transform 200ms;
 transition: transform 200ms, -webkit-transform 200ms;
}

.line-1 {
 -webkit-transform: translate3d(0, -8px, 0);
 transform: translate3d(0, -8px, 0);
}

.line-2 {
 -webkit-transform: translate3d(0, 0, 0);
 transform: translate3d(0, 0, 0);
}

.line-3 {
 -webkit-transform: translate3d(0, 8px, 0);
 transform: translate3d(0, 8px, 0);
}
.MenuOpened .line-1 {
   -webkit-transform: translate3d(0, 0, 0) rotate(45deg);
   transform: translate3d(0, 0, 0) rotate(45deg);
}

.MenuOpened .line-2 {
   -webkit-transform: translate3d(0, 0, 0) scale(0.1, 1);
   transform: translate3d(0, 0, 0) scale(0.1, 1);
}

.MenuOpened .line-3 {
   -webkit-transform: translate3d(0, 0, 0) rotate(-45deg);
   transform: translate3d(0, 0, 0) rotate(-45deg);
}

</style>
