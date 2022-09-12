<template>
  <div class="bottom-bar">
    <div class="btn">
      <check-button :isActive='selectAll' @click.native="reverseAll"></check-button>
      <span>全选</span>
    </div>
    <div class="total">
      合计:￥{{totalPrice}}
    </div>
    <div class="settle">
      去结算({{checkedProduct}})
    </div>
  </div>
</template>

<script>
import CheckButton from '../CheckButton'
export default {
  components:{
    CheckButton
  },
  computed:{
    selectAll(){
      if(!this.$store.state.productList.length) return false
      return !this.$store.state.productList.some(item=>!item.checked)
    },
    totalPrice(){
      return this.$store.state.productList.filter(item=>{
        return item.checked==true
      }).reduce((pre,item)=>{
        return pre+item.price*item.count
      },0)
    },
    checkedProduct(){
      return this.$store.state.productList.filter(item=>{
        return item.checked
      }).length
      }
    },
  methods:{
    reverseAll(){
      const x=this.selectAll
      this.$store.state.productList.forEach(item => {
        item.checked=!x
      })
    }
  }
}
</script>

<style scoped>
.bottom-bar{
  width: 100%;
  height: 50px;
  background-color: white;
  border-top: 1px solid #e1e1e1;
  display: flex;
  font-size: 12px;
  align-items: center;
}
.btn{
  display: flex;
  margin-left: 6px;
  align-items: center;
}
.btn span{
  margin: 0 10px;
}
.total{
  display: flex;
  align-items: center;
  flex: 1;
}
.settle{
  width: 88px;
  height: 30px;
  border-radius: 40px;
  line-height: 30px;
  background-color: var(--color-tint);
  text-align: center;
  margin-right: 5px;
  color: white;
}
</style>