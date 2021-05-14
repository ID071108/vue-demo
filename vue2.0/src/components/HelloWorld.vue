<!--
 * @Author: shuwang_wu
 * @Date: 2021-05-13 09:55:35
 * @LastEditTime: 2021-05-14 15:18:45
 * @LastEditors: shuwang_wu
 * @Description: hello.vue
 * @FilePath: \vue2.0\src\components\HelloWorld.vue
-->
<template>
  <div class="hello-world">
    <DatePicker />
    <div>Hello, {{ name }}</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'
import { DatePicker } from 'ant-design-vue'

@Component({
  components: {
    DatePicker
  }
})
export default class HelloWorld extends Vue {
  @Prop({ default: 'stranger' })
  name: string
}
</script>

<style>
.hello-world {
  background-color: #eee;
}
</style>
