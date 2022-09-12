import request from '@/utils/request'
export function getDetail(iid){
  return request({
    method:'get',
    url:'/detail',
    params:{
      iid
    }
  })
}
export class Goods{
  constructor(itemInfo,columns,services){
    this.title=itemInfo.title
    this.oldPrice=itemInfo.oldPrice
    this.price=itemInfo.price
    // 促销说明 促销span背景色
    this.discountDesc=itemInfo.discountDesc
    this.discountBgColor=itemInfo.discountBgColor
    this.columns=columns
    // 史地价格
    this.lowNowPrice=itemInfo.lowNowPrice
    // 快递运费啥的服务
    this.services=services
  }
}

export class Stores{
  constructor(shopInfo){
    this.logo=shopInfo.shopLogo
    this.name=shopInfo.name
    this.fans=shopInfo.cFans
    this.sells=shopInfo.cSells
    this.score=shopInfo.score
    this.goodsCount=shopInfo.cGoods
  }
}

export class GoodsParam{
  constructor(info,rule){
    // 这个images可能没有值
    this.image=info.images?info.images[0]:''
    this.infos=info.set
    this.sizes=rule.tables
  }
}

export function getRecommend(){
  return request({
    url:'/recommend',
    method:'get'
  })
}