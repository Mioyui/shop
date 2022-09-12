import Vue from 'vue'
export default {
  updateInfo(state){
    // state.info['address']='whyyyyy'    //不能响应式 数据虽然改变 但渲染不变
    Vue.set(state.info,'address','heart of Stu')   //这个是响应式的 还有数组的哪个splice方法
  },
  addRepeatProduct(state,product){
    product.count+=1
  },
  addNewProduct(state,product){
    product.count=1
    product.checked=true  //商品是否选中
    state.productList.push(product)
  }
  
}