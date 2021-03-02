/*
 * @author       : shuwang.wu@getech.cn
 * @createdDate  : 2021-02-25 16:23:16
 * @version      : 1.0
 * @modifier     : shuwang.wu@getech.cn
 * @modifiedDate : 2021-03-02 17:37:11
 * @reason       :
 * @FilePath     : \vite-demo\src\utils\register-comps.js
 */
import { Button, Table, Menu, Layout } from "ant-design-vue";

const compList = [Button, Table, Menu, Layout];

export function registerComps(app) {
  compList.map((comp) => {
    app.use(comp);
  });
}
