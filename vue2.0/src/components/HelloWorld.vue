<!--
 * @Author: shuwang_wu
 * @Date: 2021-05-13 09:55:35
 * @LastEditTime: 2021-05-25 19:26:56
 * @LastEditors: shuwang_wu
 * @Description: hello.vue
 * @FilePath: \vue2.0\src\components\HelloWorld.vue
-->
<template>
  <div class="hello-world">
    <!-- <Button type="primary">主要按钮</Button> -->
    <van-button type="primary" @click="onClick">主要按钮</van-button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'

@Component({
  components: {}
})
export default class HelloWorld extends Vue {
  @Prop({ default: 'stranger' })
  name: string

  onClick(): void {
    console.log(123)
  }
}
</script>

<style lang="less">
.hello-world {
  background-color: #aaa;
}
</style>
