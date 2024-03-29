
<script setup>
import ListOrTrolley from './components/ListOrTrolley.vue'

</script>

<template>
  <div id="app">
    <div class="title">购物车首页</div>
    <ListOrTrolley/>
    <route-view></route-view>
  </div>
</template>

<style lang="scss" scoped>
.title{
  text-align: center;
  font-size: 40px;
  color: black;
  background-color: gray
}
</style>
