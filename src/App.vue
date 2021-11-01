<template>
  <div id="app">
    <keep-alive include ="home">
      <router-view></router-view>
    </keep-alive>
    <AppHeader></AppHeader>
  </div>
</template>

<script>
import AppHeader from "@/components/Header"
export default {
  components:{
    AppHeader
  },
  created(){
    this.$store.dispatch("initCar")
  }
}
</script>

<style lang="scss">
  .swiper-pagination-bullet-active{
    background: #f9f5f5!important;;
  }
</style>