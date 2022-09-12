<template>
  <div :class="{'checked':isActive,'check-bottom':true}">
    <img src="@/assets/images/cart/tick.svg"  alt="" >
  </div>
</template>

<script>
export default {
  props:{
    isActive:{
      type:Boolean,
      default:false
    }
  }
}
</script>

<style>
.check-bottom{
  width: 20px;
  height: 20px;
  /* background-color: red; */
  border: 2px solid #eee;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
}
.checked{
  background-color: var(--color-tint);
  border: 2px solid var(--color-tint);

}
</style>