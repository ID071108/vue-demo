/*
 * @author       : shuwang.wu@getech.cn
 * @createdDate  : 2021-02-25 16:23:16
 * @version      : 1.0
 * @modifier     : shuwang.wu@getech.cn
 * @modifiedDate : 2021-03-03 18:56:06
 * @reason       : register-components
 * @FilePath: \vue3.0\src\utils\register-components.js
 */

import {
  Button,
  Table,
  Menu,
  Layout,
  Breadcrumb,
  message
} from "ant-design-vue";

const compList = [Button, Table, Menu, Layout, Breadcrumb, message];

export function registerComps(app) {
  compList.map((comp) => {
    app.use(comp);
  });
}
