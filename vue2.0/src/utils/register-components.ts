/*
 * @Author: shuwang_wu
 * @Date: 2021-05-14 15:22:04
 * @LastEditTime: 2021-05-14 15:39:49
 * @LastEditors: shuwang_wu
 * @Description: register component from antd-vue
 * @FilePath: \vue2.0\src\utils\register-components.ts
 */

import {
  Button,
  Table,
  Menu,
  Layout,
  Breadcrumb,
  message
} from 'ant-design-vue'

const compList = [Button, Table, Menu, Layout, Breadcrumb, message]

export default function registerComps (app) {
  compList.map(comp => {
    app.use(comp)
  })
}
