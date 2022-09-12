<template>
  <div class="cart-item">
    <div class="check"><check-button :isActive='cartItem.checked' @click.native="reverseChecked"></check-button> </div>
    <div class="item-info">
      <div class="item-image"><img class="img-img" :src="cartItem.image" alt="" @load="imgload"></div>
      <div class="item-detail">
        <div class="title">{{cartItem.title}}</div>
        <div class="desc">{{cartItem.desc}}</div>
        <div class="price">
          <span>{{cartItem.price}}</span>
          <span>x{{cartItem.count}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from '../CheckButton'
export default {
  props:{
    cartItem:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  components:{
    CheckButton
  },
  data(){
    return {
      isActive:false
    }
  },
  methods:{
    imgload(){
      this.$bus.$emit('getLoad')
    },
    reverseChecked(){
      this.cartItem.checked=!this.cartItem.checked
    }
  }
}
</script>

<style>
.cart-item{
  height: 100px;
  border-bottom: 3px solid #eee;
  display: flex;
  margin-bottom: 3px;
  background-color: white;
  border-radius: 3px;
}
.check{
  width: 8%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 5px;
}
.item-info{
  display: flex;
  width: 90%;
  height: 100%;
  margin-top: 5px;
}
.item-image{
  width: 32%;
  display: flex;
}
.img-img{
  width: 80%;
  /* height: 90%; */
  margin: 4px auto 10px;
  border-radius: 5px;
}
.item-detail{
  width: 68%;
  height: 100%;
  margin-left: 5px;
  padding-right:5px ;
}
.title{
  width: 100%;
  height: 30px;
  padding: 0 3px;
  font-size: 18px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.desc{
  width: 100%;
  height: 30px;
  padding: 0 3px;
  font-size: 14px;
  color: rgb(122, 120, 120);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-top: 5px;
}
.price{
  width: 100%;
  height: 20px;
  padding: 0 3px;
  font-size: 14px;
  color: rgb(122, 120, 120);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-top:5px ;
  display: flex;
  justify-content: space-between;
}
.price span:nth-child(1){
  color: #f78c48;
}
.price span:nth-child(2){
  font-weight: 600;
}
</style>