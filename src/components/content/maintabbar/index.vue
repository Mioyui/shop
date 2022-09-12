<template>
  <div>
    <tab-bar>
      <tab-bar-item  path="/home" activeColor="red">
        <img slot="item-icon" src="@/assets/images/tabbar/大白.png" alt="">
        <img slot="item-icon-active" src="@/assets/images/tabbar/韩服女.png" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="#73ea55"> 
        <img slot="item-icon"  src="@/assets/images/tabbar/大叔.png" alt="">
        <img slot="item-icon-active" src="@/assets/images/tabbar/男生.png" alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart" activeColor="#73ea55">
        <img slot="item-icon"  src="@/assets/images/tabbar/古装女生.png" alt="">
        <img slot="item-icon-active" src="@/assets/images/tabbar/女生.png" alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="#73ea55">
        <img slot="item-icon"  src="@/assets/images/tabbar/光头男.png" alt="">
        <img slot="item-icon-active" src="@/assets/images/tabbar/秃头大叔.png" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from '@/components/common/TabBar/index.vue'
import TabBarItem from '@/components/common/TabBar/TabBarItem/index.vue'
export default {
  components:{
    TabBar,
    TabBarItem
  }
}
</script>

<style>

</style>