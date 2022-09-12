<template>
  <div class="goods-info" v-if="goodsInfo!={}">
    <div class="info-title">{{goodsInfo.title}}</div>
    <div class="info-price">
      <span>{{goodsInfo.price}}</span>
      <span v-if="goodsInfo.oldPrice">{{goodsInfo.oldPrice}}</span>
      <span v-if="goodsInfo.discountDesc">{{goodsInfo.discountDesc}}</span>
    </div>
    <!-- 商品销量收藏运费等 -->
    <div class="info-columns" v-if="goodsInfo.columns">
      <span>{{goodsInfo.columns[0]}}</span>
      <span>{{goodsInfo.columns[1]}}</span>
      <span>{{goodsInfo.columns[2]}}</span>
    </div>
    <div class="info-services" v-if="goodsInfo.services">
      <div class="services-item" v-for="(item,index) in goodsInfo.services" :key="index">
        <span><img :src="item.icon" alt=""></span>
        <span>{{item.name}}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props:{
    goodsInfo:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  mounted(){
    console.log('1111',this.goodsInfo);
  },
}
</script>

<style scoped>
.goods-info{
  width: 100%;
}
.info-title{
  margin-top: 10px;
  font-size: 17px;
  /* font-weight: 500; */
  padding: 0 3px;
}
.info-price{
  margin-top: 5px;
  padding: 0 3px;
}
.info-price span:nth-child(1){
  color:rgb(247, 162, 176);
  font-size: 20px;
}
.info-price span:nth-child(2){
  font-size: 13px;
  margin-left: 3px;
  color: #a8a8a8;
  text-decoration: line-through;  /* 删除线样式 */   
}
.info-price span:nth-child(3){
  /* width: 100px; */
  display: inline-block;
  height: 16px;
  font-size: 12px;
  color: white;
  line-height: 16px;
  border-radius: 16px;
  padding: 2px 5px;
  margin-left: 5px;
  font-weight: 600;
  background-color: rgb(243, 104, 127);
}
.info-columns{
  width: 100%;
  display: flex;
  margin: 8px 0;
  border: 2px 0px solid #eee;
  justify-content: space-between;  /* 最左最右靠边，中间间距相等 */
}
.info-columns span{
  font-size: 12px;
  display: inline-block;
  color: #a8a8a8;
}
.info-services{
  display: flex;
  justify-content: space-between;
  font-size: 8px;
  padding: 0 5px 20px 5px;
  margin: 30px 0;
  border-bottom: 5px solid #eee;
}
.services-item{
  justify-content: space-around;
}
.services-item img{
  width: 12px;
}

</style>