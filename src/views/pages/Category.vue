<template>
  <div class="category-view">
    <div class="category-view-bar mb20">
      <el-button
        type="primary"
        class="fr"
        icon="el-icon-plus"
        @click="createCategory">创建分类</el-button>
    </div>

    <el-table
      border
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="id"
        label="分类ID">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名">
      </el-table-column>
      <el-table-column
        label="创建时间">
        <template slot-scope="scope">
          {{ scope.row.createdAt | formatDate('YYYY-MM-DD hh:mm') }}
        </template>
      </el-table-column>
      <el-table-column
        label="更新时间">
        <template slot-scope="scope">
          {{ scope.row.updatedAt | formatDate('YYYY-MM-DD hh:mm') }}
        </template>
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="100">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="edit(scope.row)">编辑</el-button>
          <el-button type="text" size="small" @click="remove(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination
      style="float: right; margin-top: 20px;"
      :page-size="pageSize"
      layout="prev, pager, next"
      pager-count="5"
      :current-page="pageNum"
      :total="total">
    </el-pagination>

    <CreateCategoryDialog
      v-model="visible"
      :title="title"
      :form="form" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import CreateCategoryDialog from '@/components/Category/CreateCategoryDialog.vue'

@Component({
  components: {
    CreateCategoryDialog
  }
})
export default class extends Vue {
  public visible: boolean = false
  private tableData: any[] = []
  public title: string = ''
  public form: any = {}
  private total: number = 0
  private pageSize: number = 10
  private pageNum: number = 1

  private created() {
    this.fetch()
  }

  private async fetch() {
    const resp = await this.$api.category.findSome({
      pageSize: this.pageSize,
      pageNum: this.pageNum
    })
    this.total = resp.result.total
    this.tableData = resp.result.list
  }

  private edit(row: any) {
    this.title = '编辑分类'
    this.visible = true
    this.form = { ...row }
  }

  private async remove(row: any) {
    const isConfirm = await this.$confirm('是否确认删除该分类？', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    })
    if (!isConfirm) return
    const resp = await this.$api.category.destory(row.id)
    if (resp.code === 1) this.$message.success('删除成功')
  }

  private createCategory() {
    this.title = '创建分类'
    this.visible = true
  }
}
</script>

<style lang="scss">
  .category-view-bar {
    overflow: hidden;
  }
</style>
