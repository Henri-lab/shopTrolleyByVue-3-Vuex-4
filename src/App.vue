
<script setup>
import jumpbtn from './components/jumpbtn.vue'
// test
// import List from './views/List.vue';
// import Trolley from './views/Trolley.vue';

</script>

<template>
  <div id="app">
    <div class="title">购物车首页</div>
    <jumpbtn/>
    <router-view></router-view>
    <!-- test -->
    <!-- <list/> -->
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
