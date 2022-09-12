<template>
  <div class="goods-list">
    <goods-item v-for="(item,index) in goods" :key="index" :item='item'></goods-item>
  </div>
</template>

<script>
import GoodsItem from './goodsItem.vue'
export default {
  props:{
    goods:{
      type:Array,
      default(){return []}
    }
  },
  components:{
    GoodsItem
  }
}
</script>

<style>
.goods-list{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>