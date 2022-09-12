<template>
  <div class="tabbar">
    <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.tabbar{
  width: 100%;
  height: 70px;
  background-color: #efefef;
  display: flex;
  position: fixed;
  left: 0px;
  right: 0px;
  bottom:0px;
  /* border-top: 1px solid #fefefe; */
  box-shadow: 0 -1px 10px #d3d3d3;
  z-index: 999;
}

</style>