/*
 * @Author: shuwang_wu
 * @Date: 2021-05-14 15:22:04
 * @LastEditTime: 2021-05-25 18:26:17
 * @LastEditors: shuwang_wu
 * @Description: register component from antd-vue
 * @FilePath: \vue2.0\src\utils\register-components.ts
 */

// 引入组件
import { Button, Tabbar, TabbarItem } from 'vant'

// 引入组件样式
// import 'vant/lib/button/style'
// 使用到的组件
const compList = [Button, Tabbar, TabbarItem]

export default function registerComps(app: any): void {
  compList.forEach(comp => {
    app.use(comp)
  })
}
