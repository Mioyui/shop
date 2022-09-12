<template>
  <div class="goods-info" v-if="detailGoodsInfo!={}">
    <div class="desc">{{detailGoodsInfo.desc}}</div>
    <div class="img-list" v-if="detailGoodsInfo.detailImage">
      <div class="img-item" v-for="(item,index) in detailGoodsInfo.detailImage[0].list" :key="index">
        <img :src="item" alt="" @load="imageLoad">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    detailGoodsInfo:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  data(){
    return {
      count:0,
      imgsLength:0
    }
  },
  watch:{
    detailGoodsInfo(){
      this.imgsLength=this.detailGoodsInfo.detailImage[0].list.length
    }
  },
  methods:{
    imageLoad(){
      // 判断所有图片都加载完成 再进行scroll刷新
      // 我们可以直接传递自定义事件 但考虑到性能问题 可以当获取总长度后 再进行刷新
      if(++this.count===this.imgsLength){
        this.$emit('loadCompleted')
      }
    }
  }

}
</script>

<style scoped>
.goods-info{

}
.desc{
  margin-top: 5px;
  color: rgb(77, 74, 74);
  font-size: 14px;
  padding: 0 5px;
}
.img-list{

}
.img-item{
  width: 100%;
  /* height: 500px; */
  margin-bottom: 5px;

}
.img-item img{
  width: 100%;
  height: 100%;
}
</style>