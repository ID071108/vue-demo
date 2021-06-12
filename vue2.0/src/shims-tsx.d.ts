/*
 * @Author: shuwang_wu
 * @Date: 2021-05-26 10:22:38
 * @LastEditTime: 2021-05-26 10:22:54
 * @LastEditors: shuwang_wu
 * @Description:
 * @FilePath: \vue2.0\src\shims-tsx.d.ts
 */
import Vue, { VNode } from 'vue'

declare global {
  namespace JSX {
    // tslint:disable no-empty-interface
    interface Element extends VNode {}
    // tslint:disable no-empty-interface
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
      [elem: string]: any
    }
  }
}
