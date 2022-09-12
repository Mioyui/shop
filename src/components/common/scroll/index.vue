<template>
  <div ref="scroll">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  props:{
    // 监听better-scroll的滚动
    probeType:{
      type:Number,
      default:0
    },
    pullUpLoad:{
      type:Boolean,
      default:false
    }
  },
  data(){
    return{
      bscroll:null
    }
  },
  mounted(){
    this.bscroll=new BScroll(this.$refs.scroll,{
      scrollY: true,
      click: true,
      probeType:this.probeType,
      pullUpLoad:true
    })
    this.bscroll.on('scroll',pos=>{
      // 派发获取滚动数据事件
      this.$emit('scrollPos',pos)
    })
    this.bscroll.on('pullingUp',this.getMoreData)
  },
  methods:{
    scrollToTop(x,y,time=300){
      this.bscroll &&  this.bscroll.scrollTo(x,y,time)
    },
    getMoreData(){
      // setTimeout(()=>{
      //   console.log('我要获取更多数据');
      //   this.$emit('theBottom')
      // },2000)
      this.bscroll &&  this.$emit('theBottom')
    },
    finishPullUp(){
      console.log('加载新数据');
      this.bscroll &&  this.bscroll.finishPullUp()
      // 我们单纯设置上面这个结束拉取 会造成渲染不及时 组件划不动的bug 每次结束再执行刷新命令就可以了
      this.bscroll.refresh()
    },
    refresh(){
      this.bscroll && this.bscroll.refresh()
      console.log(111);
    }
  }

}
</script>

<style>

</style>