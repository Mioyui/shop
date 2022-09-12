<template>
  <div class="bottom-bar">
    <div class="bar-item bar-left">
      <div>
        <i class="icon service"></i>
        <span class="text">客服</span>
      </div>
      <div>
        <i class="icon shop"></i>
        <span class="text">店铺</span>
      </div>
      <div>
        <i class="icon selcet"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bar-item bar-right">
      <div class="bar-cart" @click="addToCart">加入购物车</div>
      <div class="bar-buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {

    }
  },
  methods:{
    addToCart(){
      this.$emit('cartAdd')
    }
  }
}
</script>

<style scoped>
.bottom-bar{
  height: 66px;
  background-color: #eee;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0px;
  z-index: 100000;
  display: flex;
}
.bar-item{
  flex: 1;
  display: flex;
}
.bar-item>div{
  flex: 1;
}
.bar-left .text{
  font-size: 13px;
  padding: 0px 0 2px 12px;
}
.bar-left .icon{
  display: block;
  width: 22px;
  height: 22px;
  margin: 10px auto 3px;
  background: url('@/assets/images/detail/detail_bottom.png') 0 0/100%;
}
.bar-left .service{
  background-position: 0 -54px;
}
.bar-left .shop{
  background-position: 0 -98px;
}
.bar-left .select{
  background-position: 0 0px;
}
.bar-right{
  display: flex;
  font-weight: 600;

}
.bar-right>div{
  flex: 1;
}
.bar-right .bar-cart{
  width: 100%;
  height: 100%;
  display: flex;
  color: rgb(71, 68, 68);
  align-items: center;
  justify-content: center;
  background-color: rgb(214, 201, 59);
}
.bar-right .bar-buy{
  width: 100%;
  height: 100%;
  display: flex;
  color: white;
  align-items: center;
  justify-content: center;
  background-color: deeppink;
}
</style>