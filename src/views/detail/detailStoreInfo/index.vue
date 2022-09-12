<template>
  <div v-if="storesInfo!={}" style="padding-bottom: 20px;border-bottom: 5px solid #eee;">
    <div class="store-header" >
      <span><img :src="storesInfo.logo" alt=""></span>
      <span>{{storesInfo.name}}</span>
    </div>
    <div class="store-main">
      <div class="main-left">
        <div>
          <div style="text-align:center">{{(storesInfo.sells/10000).toFixed(1)}}万</div>
          <div style="margin-top:8px">总销量</div>
        </div>
        <div>
          <div style="text-align:center">{{storesInfo.goodsCount}}</div>
          <div style="margin-top:8px">全部宝贝</div>
        </div>
      </div>
      <div class="main-right" >
        <tr v-for="(item,index) in storesInfo.score" :key="index">
          <td>{{item.name}}</td>
          <td :class="[item.isBetter?'score-high':'score-low']">{{item.score}}</td>
          <td :class="[item.isBetter?'high':'low' ]">{{item.isBetter?'高':'低'}}</td>
        </tr>
      </div>
    </div>
    <div class="store-footer">进店逛逛</div>
  </div>
</template>

<script>
export default {
  props:{
    storesInfo:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  data(){
    return{
      
    }
  }

}
</script>

<style scoped>
.store-header{
  display: flex;
}
.store-header img{
  width: 48px;
  margin-left: 20px;
  border-radius: 50%;
  border: 2px solid rgb(166, 165, 165);
}
.store-header span:nth-child(2){
  display: inline-block;
  line-height: 48px;
  margin-left: 8px;
  color: rgb(158, 157, 157);
  font-weight: 500;
}
.store-main{
  display: flex;
  width: 100%;

}
.main-left{
  width: 50%;
  border-right: 1px solid #eee;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  color: rgb(62, 60, 60);
}
.main-right{
  width: 50%;
  padding: 0 20px;
}
.main-right tr{
  display: flex;
  font-size: 14px;
  font-weight: 500;
  color: rgb(90, 88, 88);
  justify-content: space-between;
  margin-bottom: 5px;
}
.score-high{
  color: red;
}
.score-low{
  color: green;
}
.high{
  color: white;
  background-color: rgb(244, 59, 59);
}
.low{
  color: white;
  background-color: rgb(20, 132, 20);
}
.store-footer{
  width: 120px;
  height: 28px;
  background-color: #eee;
  border-radius: 20px;
  margin: 0 auto;
  margin-top: 30px;
  text-align: center;
  line-height: 28px;
  color: rgb(142, 134, 134);
  
}
</style>