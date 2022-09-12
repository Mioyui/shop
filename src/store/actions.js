export default {
  actionInfo(context,payload){
    // 这里进行异步操作 ，为了让调用者可以看到结果 我们可以返回promise并进行成功打印
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        context.commit('updateInfo')
        // console.log(payload);
      },1000)
      resolve('异步操作成功！')
    })
  },
  addToCart({state,commit},product){
    return new Promise((resolve,reject)=>{
      let repeatProduct=state.productList.find(item=>{
        return item.iid==product.iid
      })
      if(repeatProduct){
        // 这里懂了，浅拷贝，引用的地址，所以改值发生改变，原数组就进行改变
        commit('addRepeatProduct',repeatProduct)
        resolve('添加重复商品成功!')
      }else{
        commit('addNewProduct',product)
        resolve('新添加该商品成功！')
      }
      
    })
  }
}