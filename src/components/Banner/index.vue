<template>
    <div class="home-banner swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" 
                v-for="banner in banners"
                :key="banner.id"
            >
            <img  width="100%" :src="getImages(banner.images.small)" alt="">
            </div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</template>

<script>
import Swiper from "swiper"
import getImages from "@/modules/utils-getImages"
export default {
    data(){
        return {
            banners:[]
        }
    },
    methods:{
        getImages
    },
    created(){
        this.$http.get("api/db/in_theaters",{
            params:{
                limit:6
            }
        }).then(res=>{
            this.banners = res.data.object_list;
            //对轮播图组件进行实例化
            this.$nextTick(()=>{
                new Swiper(".home-banner",{
                    loop:true,
                    pagination:{
                        el:".swiper-pagination"
                    }
                })
            })
        })
    }
}
</script>

<style lang="scss" scoped>
    .home-banner{
        margin-top:0.5rem;
        height:2.2rem;
        img{
            width:100%;
            height:100%;
        }
    }
</style>