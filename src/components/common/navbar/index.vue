<template>
  <div class="nav-bar">
    <div class="nav-left"><slot name="left"></slot></div>
    <div class="nav-center"><slot name="center"></slot></div>
    <div class="nav-right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .nav-bar{
    width: 100%;
    /* height: 44px; */
    display: flex;
    font-size: 18px;
    line-height: 44px;
    text-align: center;
    /* color: #fff; */
    position: fixed;
    z-index: 999;
  }
  .nav-left{
    width: 20%;
    height: 44px;
    /* background: pink; */
  }
  .nav-center{
    flex: 1;
  }
  .nav-right{
    width: 20%;
    height: 44px;
    /* background: pink; */
  }
</style>