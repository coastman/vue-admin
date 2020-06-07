<template>
  <div class="left-menu">
    <el-menu
      class="el-menu"
      background-color="#304156"
      text-color="rgb(191, 203, 217)"
      default-active="1">
      <el-menu-item
        v-for="(item, index) in routes"
        :index="String(index + 1)"
        :key="index">
        {{ item.meta.name }}
      </el-menu-item>
      <!-- <el-submenu
        v-for="(item, index) in routes"
        :index="String(index + 1)"
        :key="index">
        dsdsd
      </el-submenu> -->
    </el-menu>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'
import { routes } from '@/router'

@Component({
  name: 'LeftMenu'
})
export default class extends Vue {
  get routes () {
    // console.log('====>', this.$route)
    return routes
  }

  created () {
    console.log(this.routes)
  }
}
</script>

<style lang="scss" scoped>
  .el-menu {
    border: none;
  }
</style>
