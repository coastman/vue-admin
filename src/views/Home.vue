<template>
  <div class="home">
    <LeftMenu class="left-menu"/>
    <section class="app-main">
      <router-view />
    </section>
    <!-- <Main /> -->
  </div>
</template>

<script>
// @ is an alias to /src
import LeftMenu from '@/components/LeftMenu/index.vue'

export default {
  name: 'Home',
  components: {
    LeftMenu
  }
}
</script>

<style lang="scss">
.home {
  width: 100%;
  height: 100%;
  position: relative;
}

.left-menu {
  width: 210px;
  background-color: #304156;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 999;
  overflow: hidden;
}

.app-main {
  box-sizing: border-box;
  min-height: 100%;
  margin-left: 210px;
  position: relative;
  padding: 32px;
}
</style>
