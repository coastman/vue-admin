<template>
  <div class="page-article">
    <mavon-editor v-model="value"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class extends Vue {
  private value: string = ''
}
</script>

<style lang="scss" scoped>

</style>
