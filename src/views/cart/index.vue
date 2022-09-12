<template>
  <div class="cart">
    <nav-bar class="nav-bar"><div slot="center">购物车({{cartLength}})</div></nav-bar>
    <scroll class="scroll" ref="scroll">
      <cart-list></cart-list>
    </scroll>
    <cart-bottom-bar class="bottom-bar"></cart-bottom-bar>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar'
import CartList from './cartList'
import CartBottomBar from './cartBottomBar'

import Scroll from '@/components/common/scroll'

import {mapGetters} from 'vuex'
export default {
  components:{
    NavBar,
    CartList,
    CartBottomBar,
    Scroll
  },
  computed:{
    ...mapGetters(['cartLength'])
  },
  activated(){
    console.log('cart组件活跃');
    this.$bus.$on('getLoad',()=>{
      this.$refs.scroll.refresh()
    })
  },
  deactivated() {
    this.$bus.$off('getLoad')
  },
}
</script>

<style scoped>
.cart{
  background-color: #eee;
  position: relative;
  height: 100vh;
  z-index: 998;
}
.nav-bar{
  background: var(--color-tint);
}
.scroll{
  position: absolute;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 66px;
  overflow: hidden;
}
.bottom-bar{
  position: absolute;
  bottom: 70px;
}
</style>