<template>
  <div>
    <cart-list-item v-for="(item,index) in cartList" :key="index" :cartItem='item'></cart-list-item>
  </div>
</template>

<script>
import CartListItem from '../cartListItem'
import {mapGetters} from 'vuex'
export default {
  computed:{
    ...mapGetters(['cartList'])
  },
  components:{
    CartListItem
  }
}
</script>

<style>

</style>