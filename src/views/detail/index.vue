<template>
  <div class="detail">
    <detail-nav-bar @getActiveIndex="changePos" ref="nav"></detail-nav-bar>
    <scroll class="box" ref="scroll" :probeType='3' @scrollPos='getPosition'>
      <detail-swiper :topImages="topImages"></detail-swiper>
      <!-- 商品的信息展示 这里将接口获取的数据 进行处理 通过引用构造类 来获得处理的数据-->
      <detail-item-info :goodsInfo="goodsInfo"></detail-item-info>
      <detail-store-info :storesInfo='storeInfo'></detail-store-info>
      <detail-goods-info :detailGoodsInfo='detailGoodsInfo' @loadCompleted="toRefresh"></detail-goods-info>
      <detail-param-info :paramInfo='paramsInfo' ref="params"></detail-param-info>
      <detail-comments :comments="comments" @imgLoad="toRefresh" ref="comment"></detail-comments>
      <goods-list :goods="recommends" ref="recommend"></goods-list>
    </scroll>
      <detail-bottom-bar @cartAdd='addCart'></detail-bottom-bar>
  </div>
</template>

<script>
import DetailSwiper from './detailSwiper'
import DetailNavBar from './detailNavBar'
import DetailItemInfo from './detailItemInfo'
import DetailStoreInfo from './detailStoreInfo'
import DetailGoodsInfo from './detailGoodsInfo'
import DetailParamInfo from './detailParamInfo'
import DetailComments from './detailComments'
import DetailBottomBar from './detailBottomBar'

import GoodsList from '@/components/content/goods'
import Scroll from '@/components/common/scroll'

import {getDetail,Goods,Stores,GoodsParam,getRecommend} from '@/api/detail'
import debounce from '@/utils/debounce'
import { mapActions } from 'vuex'
export default {
  name:'Detail',  
  components:{
    DetailNavBar,
    DetailSwiper,
    DetailItemInfo,
    DetailStoreInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailComments,
    DetailBottomBar,
    GoodsList,
    Scroll
  },
  data(){
    return {
      topImages:null,
      // 看弹幕好像说不能默认null  要是对象
      goodsInfo:{},
      storeInfo:{},
      detailGoodsInfo:{},
      paramsInfo:{},
      comments:{},
      recommends:[],
      partPosition:[],
      currentIndex:0
    }
  },
  mounted(){
    getDetail(this.$route.params.id).then(res=>{
      console.log(res);
      const data=res.result
      this.topImages=data.itemInfo.topImages
      // 将数据传入构造器 获得构造对象
      this.goodsInfo=new Goods(data.itemInfo,data.columns,data.shopInfo.services)
      this.storeInfo=new Stores(data.shopInfo)
      this.detailGoodsInfo=data.detailInfo
      this.paramsInfo=new GoodsParam(data.itemParams.info,data.itemParams.rule)
      this.comments=data.rate.list[0]||{}
      console.log('goodsInfo类',this.paramsInfo);
    },err=>{
      console.log(err);  
      // 顶部展示图
    })
    // 加载数据后 判断图片是否加载完成 完成 刷新组件
      // 对此进行防抖操作吧，我们在所有图片加载完 在进行刷新 会好点
    const refresh=debounce(this.$refs.scroll.refresh,50)
    this.$bus.$on('imgLoadCompleted',()=>{
      refresh()
    })
    getRecommend().then(res=>{
      console.log('推荐',res);
      this.recommends=res.data.list

    },err=>{})
  },
  methods:{
    ...mapActions(['addToCart']),
    toRefresh(){
      this.$refs.scroll.refresh()
      this.partPosition=[]
      this.partPosition.push(0)
      this.partPosition.push(this.$refs.params.$el.offsetTop)
      this.partPosition.push(this.$refs.comment.$el.offsetTop)
      this.partPosition.push(this.$refs.recommend.$el.offsetTop)
      console.log('又加载了张图片',this.partPosition);
    },
    // 点击导航栏不同模块滑动到相应位置
    changePos(index){
      // 跳转前 需要获得各部分的y轴位置
      this.$refs.scroll.scrollToTop(0,-this.partPosition[index]+44,500)
    },
    getPosition(position){
      let positionY=-position.y
      const length=this.partPosition.length
      for(let i in this.partPosition){
        if(this.currentIndex!==parseInt(i)&&(
          (i<length-1&&positionY>this.partPosition[i]&&positionY<this.partPosition[parseInt(i)+1])
          ||
          (i==(length-1)&&positionY>this.partPosition[i])
        )){
          this.currentIndex=parseInt(i)
          console.log(i);
          this.$refs.nav.activeIndex=this.currentIndex
        }
      }
    },
    // 添加至购物车
    addCart(){
      const product={}
      product.image=this.topImages[0]
      product.title=this.goodsInfo.title
      product.price=this.goodsInfo.lowNowPrice
      product.desc=this.detailGoodsInfo.desc
      product.iid=this.$route.params.id
      this.addToCart(product).then(res=>{
        console.log(res);
      })
    }
  }
}
</script>

<style scoped>
.detail{
  height: 100vh;
  position: relative;
  z-index: 10000;
  background-color: white;
}
.box{
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 66px;
    overflow: hidden; 
}
</style>