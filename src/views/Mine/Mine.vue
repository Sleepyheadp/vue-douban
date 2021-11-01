<template>
    <div class="mine">
        <router-view></router-view>
        <mt-tabbar>
            <mt-tab-item
                v-for="nav in navs"
                :key="nav.id"
            >
                <router-link active-class="active" :to="{name:nav.name}">
                    <i :class="[`fa fa-`+nav.icon]"></i>
                    {{nav.title}}
                </router-link>
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>


<script>
export default{
    data(){
        return{
            navs:[
                {id:1,title:"列表",icon:"list",name:"list"},
                {id:2,title:"购买",icon:"shopping-cart",name:"car"},
            ]
        }
    }
}
</script>

<style lang="scss">
    .mine{
        //padding-top:50px;
        .mint-tabbar{
            position:fixed
        }
        .mint-tab-item{
            padding:20px;
            .active{
                color:orange
            }
        }
    }
</style>