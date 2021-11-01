<template>
    <div class="tabbar-index">
        <item
            v-for="item in footer"
            :key="item.id"
            :txt="item.txt"
            :mark="item.mark"
            :sel="selected"
        >
            <img slot="normalImg" :src="item.normalImg" alt="">
            <img slot="activeImg" :src="item.activeImg" alt="">
        </item>
    </div>
</template>

<script>
import item from "./item.vue"
export default {
    data(){
        return{
            selected:this.$route.name,
            footer:[
                //注意：在js中引用图片的地址需要用require进行包裹
                {id:1,txt:"首页",mark:"home",activeImg:require("../../assets/ic_tab_home_active.png"),normalImg:require('../../assets/ic_tab_home_normal.png')},
                {id:2,txt:"书影音",mark:"audio",activeImg:require("../../assets/ic_tab_audio_active.png"),normalImg:require('../../assets/ic_tab_audio_normal.png')},
                {id:3,txt:"广播",mark:"broadcast",activeImg:require("../../assets/ic_tab_broadcast_active.png"),normalImg:require('../../assets/ic_tab_broadcast_normal.png')},
                {id:4,txt:"分组",mark:"group",activeImg:require("../../assets/ic_tab_group_active.png"),normalImg:require('../../assets/ic_tab_group_normal.png')},
                {id:5,txt:"我的",mark:"mine",activeImg:require("../../assets/ic_tab_mine_active.png"),normalImg:require('../../assets/ic_tab_mine_normal.png')},
            ]
        }
    },
    components:{
        item
    },
    methods:{

    }
}
</script>

<style lang="scss" scoped>
    .tabbar-index{
        display:flex;
        position:fixed;
        bottom:0;
        left:0;
        width:100%;
        border-top:1px solid #ccc;
        background:#fff;
    }
</style>