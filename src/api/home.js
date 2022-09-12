import request from '@/utils/request'

export function getSliderData(){
  return request({
    url:'/home/multidata',
    method:'get'
  })
}
// 下方滑动展示数据
export function getHomeData(type,page){
  return request({
    url:'/home/data',
    method:'get',
    params:{
      type,
      page
    }
  })
}