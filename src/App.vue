<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from '@/components/content/maintabbar/index.vue'
export default {
  components:{
    MainTabBar
  }
}
</script>

<style>
@import './assets/css/index.css';
</style>
