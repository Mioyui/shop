const debounce=function(func,delay){
  let timer=null
  return function(...args){
    if(timer){clearTimeout(timer)}
      timer=setTimeout(() => {
        func.apply(this,args)
      }, delay);
  }
}
export default debounce