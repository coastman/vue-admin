# vue-admin
> 后台管理系统, 基于 Vue 构建


## 安装运行
推荐使用 yarn 来进行包安装

```bash
  git clone **.git
  cd vue-admin
  yarn install

  # 启动
  npm run dev    # 开发环境运行
  npm run build  # 打包
  npm run lint   # Eslint 校验
```

## 常用规范

### 1，提交
```bash
  <type>(<scope>): <subject>
  参考：git commit -m 'fix(view): 修复模板编译错误'
```
type 类型:

* feat：新功能（feature）
* fix：修补bug
* docs：文档（documentation）
* style： 格式（不影响代码运行的变动）
* refactor：重构（即不是新增功能，也不是修改bug的代码变动）
* test：增加测试
* chore：构建过程或辅助工具的变动

## 参考文档
* [Vue 官方文档](https://cn.vuejs.org/)

* [Vue CLI 脚手架](https://cli.vuejs.org/zh/guide/)

* [vue-class-component API](https://www.npmjs.com/package/vue-property-decorator)

* [element 官方文档](https://element.eleme.cn/#/zh-CN/component/quickstart)

* [Git Commit 规范](https://segmentfault.com/a/1190000009048911)

## 目录结构
```
vue-admin/
   |
   ├──public/                    * 不需经 webpack 处理的静态资源
   |
   ├──src/                       * 项目核心代码
   │   │
   │   │──api                    * 后端服务接口
   │   │
   │   │──assets                 * 需经 webpack 处理的静态资源
   │   │
   │   │──components             * 局部组件
   │   │
   │   │──plugins                * 第三方插件
   │   │
   │   │──router                 * 路由
   │   │
   │   │──store                  * Vuex 全局数据状态管理
   │   │
   │   │──styles                 * CSS 样式
   │   │
   │   │──views                  * 页面组件
   │   │
   │   │──App.vue                * 根组件
   │   │
   │   │──main.ts                * 入口文件
   │   │
   │   └──*****                  * TS 类型声明文件
   │
   ├──.browserslistrc            * 浏览器兼容文件
   │
   │──.editorconfig              * 编码风格配置
   │
   │──.eslintrc.js               * Eslint 配置
   │
   │──.gitignore                 * Git 忽略文件配置
   │
   │──babel.config.js            * Babel 配置
   │
   │──CHANGELOG.md               * 版本更新记录
   │
   │──package.json               * 依赖信息
   │
   │──README.md                  * 项目信息
   │
   │──tsconfig.json              * TS 配置
   │
   └──vue.config.js              * webpack 配置
```
