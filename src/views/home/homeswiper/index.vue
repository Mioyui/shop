<template>
  <div class="swiper">
    <swiper ref="mySwiper" v-bind:options="swiperOptions">
      <swiper-slide v-for="(item, index) in banners" :key="index">
          <a :href="item.link">
            <img :src="item.image" alt="" @load="swiperLoad">
          </a>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
  </div>
</template>

<script>
  import { swiper, swiperSlide } from "vue-awesome-swiper";
  import "swiper/swiper-bundle.css";
export default {
  // props写成对象形式可以 数组形式会报错运行不起来
  props:{
    banners:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components: {
    swiper,
    swiperSlide,
  },
  data(){
    return {
      swiperOptions: {
        loop: true,
        speed: 1000,
        autoplay: {
          delay: 2500,

          stopOnLastSlide: false,
          disableOnInteraction: false,
        },
        // 显示分页
        pagination: {
          el: ".swiper-pagination",
          clickable: true, //允许分页点击跳转
        },
        // 设置点击箭头
        // navigation: {
        //   nextEl: ".swiper-button-next",
        //   prevEl: ".swiper-button-prev",
        // },
      },
      swiperFlag:true
    }
  },
  methods:{
    swiperLoad(){
      // 会发现这样子会触发多次，我们只需要触发一次就好，搞一个 节流阀  设置个flag
      if(this.swiperFlag){
        this.$emit('swiperLoaded')
        this.swiperFlag=false
      }
    }
  },
  mounted(){
  }
};
</script>

<style scoped>
  .swiper{
    width: 100%;
    height: 150px;
    /* padding-top: 43px; */
  }
  .swiper img{
    width: 100%;
    height: 100%;
  }
</style>