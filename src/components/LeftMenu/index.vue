<template>
  <div class="left-menu">
    <el-menu
      class="el-menu"
      background-color="#304156"
      text-color="rgb(191, 203, 217)"
      :default-active="String(activeIndex)">
      <template v-for="(item, index) in routes">
        <router-link
          class="link"
          :to="item.path"
          :key="index">
          <el-menu-item :index="String(index + 1)">
            {{ item.meta.name }}
          </el-menu-item>
        </router-link>
      </template>
    </el-menu>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'
import { childrenRoutes } from '@/router'

@Component({
  name: 'LeftMenu'
})
export default class extends Vue {
  get routes() {
    return childrenRoutes
  }

  get activeIndex() {
    const index = this.routes.findIndex(route => route.name === this.$route.name)

    return index >= 0 ? index + 1 : '1'
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
        color: inherit;
      }
    }
  }
</style>
