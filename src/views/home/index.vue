<template>
  <div @click="pushInfo" class="home">
    <nav-bar class="home-nav">
      <template slot="center">
        <div class="title">精选商品</div>
      </template>
    </nav-bar>
    <!-- 为了便捷地达到吸顶效果 我们设置另一个固定位置地组件 当吸顶位置时显示即可 -->
    <tab-toggle :homeToggle="['流行','新款','精选']" @getIndex="changeToggle" ref="homeToggle1" :class="{'fixedtoggle':isFixedToggle}"></tab-toggle>

    <scroll class="scroll-box" ref="scroll" :probeType='3' :pullUpLoad="true" @scrollPos="getPos" @theBottom="getMoreData">
        <!-- 这里做了判断 当获取到banners再传他的list  虽然都能运行 但是这样不会报错 -->
      <home-swiper :banners='banners==null?[]:banners.list' @swiperLoaded="getToggleTop"></home-swiper>
      <home-recommend :recommends='recommends==null?[]:recommends.list'></home-recommend>
      <home-subarea></home-subarea>
      <tab-toggle :homeToggle="['流行','新款','精选']" @getIndex="changeToggle" ref="homeToggle2"></tab-toggle>
      <goods-list :goods="curGoodsType"></goods-list>
    </scroll>
      <to-top @click.native="toTop" v-show="showToTop"></to-top>
  </div>
</template>

<script>
import {getSliderData,getHomeData} from '@/api/home'
import debounce from '@/utils/debounce'

import Scroll from '@/components/common/scroll'
import NavBar from '@/components/common/navbar'
import TabToggle from '@/components/content/tabtoggle'
import GoodsList from '@/components/content/goods/index.vue'
import ToTop from '@/components/content/totop/index.vue'

import HomeSwiper from '@/views/home/homeswiper'
import HomeRecommend from '@/views/home/homerecommend'
import HomeSubarea from '@/views/home/homesubarea'

export default {
  components:{
    Scroll,
    NavBar,
    TabToggle,
    GoodsList,
    ToTop,
    HomeSwiper,
    HomeRecommend,
    HomeSubarea
  },
  computed:{
    curGoodsType(){
      return this.goods[this.curToggle].list
    }
  },
  data(){
    return{
      banners:null,
      recommends:null,
      // 定义转变数据的对象，每次下拉改变该对象
      goods:{
        pop:{page:0,list:[]},
        new:{page:0,list:[]},
        sell:{page:0,list:[]},
      },
      curToggle:'pop',
      toggleTop:0,
      showToTop:false,
      isFixedToggle:false
    }
  },
  methods:{
    pushInfo(){
      // 这里action返回了promsie 我们可以调用.then方法 获取其resolve返回的消息
      this.$store.dispatch('actionInfo','小伟贼帅666').then(res=>{})
    },
    getToggleData(type){
      this.goods[type].page++
      let cur= this.goods[type].page
      const finish=debounce(this.$refs.scroll.finishPullUp,1000)
      getHomeData(type,cur).then(res=>{
        console.log(res);
        this.goods[type].list.push(...res.data.list)
        // 加载数据后 判断图片是否加载完成 完成 刷新组件
        if(cur>1){
          finish()
        }

      },err=>{
        console.log(err);
      })
    },
    // 为了达到该组件吸顶效果 我们要获取该组件到吸顶的位置 $el获取dom
    // 在其他地方获取 会发现距离不准 所以我们在swiper加载完 再获取整个高度
    getToggleTop(){
      this.toggleTop=this.$refs.homeToggle2.$el.offsetTop
    },
    changeToggle(index){
      this.$refs.homeToggle1.activeIndex=index
      this.$refs.homeToggle2.activeIndex=index
      console.log(index);
      switch(index){
        case 0:
          this.curToggle='pop'
          break
        case 1:
          this.curToggle='new'
          break
        case 2:
          this.curToggle='sell'
          break
      }
    },
    toTop(){
      // ref能拿到该组件的数据
      this.$refs.scroll.scrollToTop(0,0)
    },
    // 子组件传递的回调 返回这个当前position
    getPos(pos){
      // console.log(pos);
      if(-pos.y>1000){
        this.showToTop=true
      }else{
        this.showToTop=false
      }
      if(-pos.y>this.toggleTop){
        this.isFixedToggle=true
      }else{
        this.isFixedToggle=false
      }
    },
    // 加载更多数据
    getMoreData(){
      this.getToggleData(this.curToggle)
    },
  },
  mounted(){
    getSliderData().then(res=>{
      console.log('请求成功',res);
      this.banners=res.data.banner
      this.recommends=res.data.recommend
    }),
    this.getToggleData('pop')
    this.getToggleData('new')
    this.getToggleData('sell')


    // 加载数据后 判断图片是否加载完成 完成 刷新组件
      // 对此进行防抖操作吧，我们在所有图片加载完 在进行刷新 会好点
    const refresh=debounce(this.$refs.scroll.refresh,50)
    this.$bus.$on('imgLoadCompleted',()=>{
      refresh()
    })
  },
}
</script>

<style scoped>
  .home{
    position: relative;
    width: 100%;
    height: 100vh;
  }
  .home-nav{
    background-color: pink;
  }
  .scroll-box{
    position: absolute;
    top: 44px;
    bottom: 70px;
    left: 0px;
    right: 0px;
    /* background: #bfa; */
    overflow: hidden; 
    /* z-index: 9999; */
  }
  .fixedtoggle{
    position: relative;
    left: 0;
    top: 44px;
    /* background-color: red; */
  }
</style>