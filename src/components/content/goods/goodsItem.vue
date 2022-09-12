<template>
  <div class="goods-item" @click="toDetail">
    <!-- 图片有个加载完成事件 调用它 当图片加载完成 就刷新下scroll -->
    <img :src="showImage" alt="" @load="imgLoadCompleted">
    <div class="goods-info">
      <p>{{item.title}}</p>
      <div class="info">
        <span>{{item.price}}</span>
        <span>
          <img src="@/assets/icons/star.png" alt="" class="star">
          {{item.cfav}}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    item:{
      type:Object,
      default(){return {}}
    }
  },
  computed:{
    showImage(){
      return this.item.show?this.item.show.img:this.item.image
    }
  },
  methods:{
    imgLoadCompleted(){
      this.$bus.$emit('imgLoadCompleted')
    },
    // 跳转到商品详情页面
    toDetail(){
      console.log(this.item.iid);
      // params风格传参 必传
      this.$router.push('/detail/'+this.item.iid)
    }
  }
}
</script>

<style scoped>
.goods-item{
  width: 46%;
  position: relative;
  padding-top: 5px;
  padding-bottom: 40px ;
}
.goods-item img{
  width: 100%;
  border-radius: 2px;
}
.goods-info{
  position: absolute;
  left: 0px;
  bottom:5px;
}
.goods-info p{
  width: 140px;
  padding-top: 5px;
  font-size: 12px;
  /* 规定段落中的文本不进行换行： */
  white-space: nowrap;
  overflow: hidden;
  color: #666;
  text-overflow: ellipsis;
}
.info{
  font-size: 12px;
  text-align: center;
}
.info span:nth-child(1){
  color: rgb(245, 119, 186);
}
.info span:nth-child(2){
  margin-left: 10px;
  color: #666;
}
.star{
  width: 16px !important;
  height: 16px;
  vertical-align: -4px;
  margin-right: -3px;
}
</style>