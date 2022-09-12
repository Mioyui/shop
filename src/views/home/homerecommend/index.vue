<template>
  <div class="home-recommend">
    <div class="recommend-item" v-for="(item,index) in recommends" :key="index">
      <a :href="item.link" style="text-decoration: none;">
        <img :src="item.image" alt="">
      </a>
        <div>{{item.title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    recommends:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style>
.home-recommend{
  width: 100%;
  /* height: 80px; */
  display: flex;
  margin-top: 20px;
  text-align: center;
  font-size: 12px;
  /* background-color: #bfa; */
  border-bottom: 5px solid #eee;
}
.recommend-item{
  flex: 1;  
  margin-top: 5px;
  border-radius: 50%;
  
}
.recommend-item img{
  width: 65px;
  height: 65px;
  /* width: 100%; */
  /* height: 100%; */
  border-radius: 50%;
  padding-bottom: 2px;
}
</style>