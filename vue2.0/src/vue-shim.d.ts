/*
 * @Author: shuwang_wu
 * @Date: 2021-05-13 15:45:32
 * @LastEditTime: 2021-05-14 15:51:41
 * @LastEditors: shuwang_wu
 * @Description: vue shim.d: import vue identifier to ts
 * @FilePath: \vue2.0\src\vue-shim.d.ts
 */
declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}
// declare module '*.json' {
//   const jsonValue: any
//   export default jsonValue
// }

// declare module "*.json" {
//   const jsonValue: any;
// export default jsonValue;
// }
