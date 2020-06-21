<template>
  <div class="page-article">
    <div class="title">
      <input
        class="title-input"
        type="text"
        placeholder="请输入标题..."
        maxlength="50"
        v-model.trim="name" />
    </div>
    <div class="markdown">
      <mavon-editor
        placeholder="请输入正文..."
        fontSize="16px"
        :boxShadow="false"
        :subfield="false"
        v-model.trim="content"
        @save="saveArticle"
      />
    </div>
    <!-- <div class="preview" v-for="(item, index) in preview" :key="index">
      <div v-html="item"></div>
    </div> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
// import marked from '@/plugins/marked'

@Component
export default class extends Vue {
  private name: string = ''
  private content: string = ''
  private preview: string = ''

  private async saveArticle(): Promise<void> {
    const { content, name } = this
    await this.$api.article.create({
      name,
      content
    })
  }
}
</script>

<style lang="scss" scoped>
  .title {
    margin-bottom: 14px;

    &-input {
      width: 100%;
      border: 0;
      font-size: 30px;
      font-weight: 600;
      outline: none;
      box-shadow: none;
      min-height: 44px;
    }
  }

  .markdown {
    .v-note-wrapper {
      border: none;

      ::v-deep .v-note-op {
        border-top: 1px solid rgba(26,26,26,.08);
        border-bottom: 1px solid rgba(26,26,26,.08);

      }
      ::v-deep .content-input-wrapper {
        padding-top: 12px !important;
      }
    }
  }
</style>
