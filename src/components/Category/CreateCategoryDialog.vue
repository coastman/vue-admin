<template>
  <el-dialog
    :title="title"
    :visible.sync="visible"
    width="30%"
    @close="close">
    <el-form :model="form" :rules="rules" ref="form">
      <el-form-item label="名称" prop="name" label-width="54px">
        <el-input v-model.trim="form.name"></el-input>
      </el-form-item>

      <el-form-item label="描述" prop="desc" label-width="54px">
        <el-input v-model.trim="form.desc"></el-input>
      </el-form-item>
    </el-form>

    <div slot="footer" class="dialog-footer">
      <el-button @click="visible = false">取 消</el-button>
      <el-button type="primary" @click="submit">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'

interface Form {
  name: string | any [];
  desc?: string;
}

@Component
export default class extends Vue {
  @Prop({ default: '创建分类' }) readonly title?: string
  @Prop() value: boolean = false
  @Prop() form: any

  visible: boolean = false
  // form: Form = {
  //   name: '',
  //   desc: ''
  // }

  rules: Form = {
    name: [
      { required: true, message: '请输入活动名称', trigger: 'blur' },
      { max: 50, message: '长度在不得超过50个字符', trigger: 'blur' }
    ]
  }

  @Watch('value')
  private onValueChange(value: boolean): void {
    this.visible = value
  }

  @Watch('visible')
  private onVisibleChange(value: boolean): void {
    this.$emit('input', value)
  }

  private async submit() {
    try {
      const valid = await (this.$refs.form as any).validate()
      if (!valid) return

      if (this.form.id) {
        this.$api.category.update(this.form)
      } else {
        this.$api.category.create(this.form)
      }
    } catch (error) {
      console.log(error)
    }
  }

  private close() {
    this.form.name = ''
    ;(this.$refs.form as any).clearValidate()
  }
}
</script>
