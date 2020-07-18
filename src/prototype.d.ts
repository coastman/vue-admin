// import {  Notification } from '@/types'
import Vue from 'vue'

declare module 'vue/types/vue' {
  interface Vue {
    $api: any,
    // $confirm: any
    // $notify
  }
}
