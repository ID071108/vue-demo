/*
 * @Author: shuwang_wu
 * @Date: 2021-05-13 15:45:32
 * @LastEditTime: 2021-05-26 14:11:48
 * @LastEditors: shuwang_wu
 * @Description: vue shim.d: import vue identifier to ts
 * @FilePath: \vue2.0\src\shims-vue.d.ts
 */

declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}

declare module '*.js' {
  const jsValue: any
  export default jsValue
}

declare module '*.ts' {
  const tsValue: any
  export default tsValue
}
