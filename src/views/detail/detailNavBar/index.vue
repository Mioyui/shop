<template>
  <div>
    <nav-bar class="detail-nav-bar">
      <div slot="left" class="detail-nav-bar-left" @click="back"><img src="@/assets/images/common/back.png" alt=""></div>
      <div slot='center' class="detail-toggle">
        <div v-for="(item,index) in detailToggle" :key='index' @click="change(index)" :class="{'detail-toggle-item':true,'acitve':activeIndex===index}">{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script scoped>
import NavBar from '@/components/common/navbar'
export default {
  components:{
    NavBar
  },
  data(){
    return {
      detailToggle:['商品','参数','评论','推荐'],
      activeIndex:0
    }
  },
  methods:{
    back(){
      this.$router.back(-1)
    },
    change(index){
      this.activeIndex=index
      this.$emit('getActiveIndex',index)
    }
  }
}
</script>

<style>
.detail-nav-bar{
  border-bottom: 1px solid #eee;
  /* color: pink; */
  background-color: #fff;
} 
.detail-nav-bar-left{
  width: 100%;
  vertical-align: middle;
}
.detail-nav-bar-left img{
  width: 30%;
  margin-top: 13px;
}
.detail-toggle{
  display: flex;
}
.detail-toggle-item{
  flex: 1;
  font-size: 16px;
  color: #a8a8a8;
}
.acitve{
  color: pink;
}
</style>