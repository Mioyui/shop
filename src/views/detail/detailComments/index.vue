<template>
  <div class="comment-info" v-if="Object.keys(comments).length!==0">
    <div class="comment-header">
      <span>用户评价</span>
      <span>更多</span>
    </div>
    <div class="comment-user">
      <div class="user-avatar"><img :src="comments.user.avatar" alt=""></div>
      <div class="user-name">{{comments.user.uname}}</div>
    </div>
    <div class="comment-text">{{comments.content}}</div>
    <div class="comment-goods">
      <span>{{commentTime}}</span>
      <span>{{comments.style}}</span>
    </div>
    <div class="comment-img" v-for="(item,index) in comments.images" :key="index"><img :src="item" alt="" @load="imgLoad"></div>

  </div>
</template>

<script>
import formatDate from '@/utils/formatDate'
export default {
  props:{
    comments:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  computed:{
    commentTime(){
      let d=new Date(this.comments.created*1000)
      return formatDate(d,'yyyy-MM-dd hh:mm:ss')
    }
  },
  methods:{
    imgLoad(){
      this.$emit('imgLoad')
    }
  }
}
</script>

<style scoped>
.comment-info{
  margin: 10px 8px;
}
.comment-header{
  width: 100%;
  height: 60px;
  line-height: 60px;
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #eee;
  color: rgb(81, 76, 76);
}
.comment-header span:nth-child(1){
  margin-left: 8px;
  font-size: 20px;
  font-weight: 600;
}
.comment-header span:nth-child(2){
  margin-right: 8px;
}
.comment-user{
  display: flex;
  margin: 10px 8px;
}
.user-avatar{
  width: 60px;
  height: 60px;
}
.user-avatar img{
  width: 100%;
  border-radius: 50%
}
.user-name{
  margin-left:10px ;
  font-size: 18px;
  height: 60px;
  line-height: 60px;
  color: rgb(81, 76, 76);
}
.comment-text{
  color: rgb(150, 139, 139);
}
.comment-goods{
  margin: 8px 0;
  color: rgb(170, 169, 169);
  font-size: 12px;
}
.comment-goods span:nth-child(2){
  margin-left: 10px;
}
.comment-img{
  width: 100%;
}
.comment-img img{
  width: 64px;
  height: 64px;
  margin-right: 6px;
  margin-top: 8px;
  float: left;
}
</style>