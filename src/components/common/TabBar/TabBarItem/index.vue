<template>
  <div class="tabbar-item" @click="routerPush">
    <slot v-if="!isActive" name="item-icon" ></slot>
    <slot v-else name="item-icon-active"></slot>
    <div :style="isActive?textColor:''"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name:'TabBarItem',
  props:{
    // path:{type:String,default:'/',require}
    path:String,
    activeColor:{type:String,default:'#pink'}
  },
  computed:{
    isActive(){return this.$route.path==this.path},
    textColor(){return this.activeColor?`color:${this.activeColor}`:""},
  },
  mounted(){
  },
  methods:{
    routerPush(){
      let cur=this.$router.currentRoute.path
      if(this.path!=cur){
        this.$router.push(this.path)
      }
    }
  }
}
</script>

<style>
.tabbar-item{
  /* width: 49px; */
  height: 49px;
  flex: 1;
  margin-top: 10px;
  text-align: center;
  font-size: 14px;
}
.tabbar-item img{
  width: 25px;
  height: 25px;
  vertical-align: middle;
  margin-bottom: 2px;
}
.active{
  color: rgb(115, 234, 85);
}
</style>