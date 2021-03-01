/*
 * @author       : shuwang.wu@getech.cn
 * @createdDate  : 2021-02-25 16:23:16
 * @version      : 1.0
 * @modifier     : shuwang.wu@getech.cn
 * @modifiedDate : 2021-02-26 14:18:18
 * @reason       :
 * @FilePath     : \vite-demo\src\utils\register-comps.js
 */
import { Button, Table, Menu } from "ant-design-vue";

const compList = [Button, Table, Menu];

export function registerComps(app) {
  compList.map((comp) => {
    app.use(comp);
  });
}
