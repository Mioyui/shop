<template>
    <swiper class="swiper" ref="mySwiper" v-bind:options="swiperOptions">
      <swiper-slide v-for="(item, index) in topImages" :key="index">
        <img :src="item" alt="" @load="imgLoadCompleted">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
  import { swiper, swiperSlide } from "vue-awesome-swiper";
  import "swiper/swiper-bundle.css";
export default {
  // props写成对象形式可以 数组形式会报错运行不起来
  props:{
    topImages:{
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
    }
  },
  methods:{
    imgLoadCompleted(){
      this.$bus.$emit('imgLoadCompleted')
    },
  },
  mounted(){
  }
};
</script>

<style scoped>
  .swiper{
    width: 100%;
    height: 300px;
    overflow: hidden;
    padding-top: 44px;
  }
  .swiper img{
    width: 100%;
    /* height: 100%; */
    /* size: 100%; */
  }
</style>