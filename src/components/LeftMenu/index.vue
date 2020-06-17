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
        <router-link class="link" :to="item.path">
          {{ item.meta.name }}
        </router-link>
      </el-menu-item>
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
  get routes() {
    return routes
  }

  created() {
    console.log(this.routes)
  }
}
</script>

<style lang="scss" scoped>
  .el-menu {
    border: none;

    .link {
      text-decoration: none;

      &:link,
      &:hover,
      &:active,
      &:visited {
        color:inherit;
      }
    }
  }
</style>
