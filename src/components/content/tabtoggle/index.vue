<template>
  <div class="tabtoggle">
    <div :class=" {'toggle-item':true,'active':activeIndex==index}" v-for="(item,index) in homeToggle" :key='index' @click="beActive(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>


import GoodsList from '@/components/content/goods/index.vue'
export default {
  props:{
    homeToggle:{
      type:Array,
      default(){return []}
    }
  },
  components:{
    GoodsList
  },
  data(){
    return{
      activeIndex:0,
      
    }
  },
  mounted(){

  },
  methods:{
    beActive(index){
      this.activeIndex=index
      this.$emit('getIndex',index)
    },
   
  }

}
</script>

<style>
.tabtoggle{
  width: 100%;
  height: 40px;
  line-height: 36px;
  display: flex;
  /* 这个样式可以使得盒子滚动到某一位置固定 */
  /* d但用了组件 不起作用，就不用这个了 */
  /* position: sticky; 
  top: 44px; */
  color: #b7b6b6;
  background-color: #fff;
  z-index: 99;
}
.toggle-item{
  flex: 1;
  text-align: center;
}
.toggle-item span{
  padding: 5px;
}
.active{
  color: pink;
}
.active span{
  border-bottom: 3px solid pink;
}
</style>