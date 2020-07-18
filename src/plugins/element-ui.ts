// 按需引用 elemet-ui https://element.eleme.cn/#/zh-CN/component/quickstart
import {
  Button,
  Select,
  Menu,
  Submenu,
  MenuItem,
  Input,
  Message,
  Notification,
  Dialog,
  Table,
  TableColumn,
  Form,
  FormItem,
  MessageBox
} from 'element-ui'
import Vue from 'vue'

Vue.use(Button)
Vue.use(Select)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(Input)
Vue.use(Dialog)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Form)
Vue.use(FormItem)

Vue.prototype.$message = Message
Vue.prototype.$notify = Notification
Vue.prototype.$confirm = MessageBox.confirm
