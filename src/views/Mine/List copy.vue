<template>
    <div class="list">
        <p>num:{{num}}</p>
        <p>doubleNum:{{doubleNum}}</p>
        <p><button @click="CHANGE_NUM">changeNum</button></p>
        <p><button @click="getNumFromBackEnd">随机数</button></p>
    </div>
</template>
<script>
import {mapState,mapGetters,mapMutations,mapActions} from "vuex"
//引入用在mutations中的常量
import {CHANGE_NUM} from "@/store/Num/const"
export default {
    data(){
        return {
            //不要把从vuex中取的数据放到data中，因为只会渲染一次，后续数据的更改并不能实时的渲染。
            //num:this.$store.state.num
        }
    },
    computed:{
        //(1)state
        ...mapState({
            num:state=>state.Num.num
        }),
        // ...mapState(["num"]),
        //(2)getters
        // doubleNum(){
        //     return this.$store.getters.doubleNum
        // }
        ...mapGetters(["doubleNum"])
    },
    methods:{
        //(3)mutations
        // changeNum(){
        //     //需要让mutations具体的changeNum方法进行调用
        //     this.$store.commit("changeNum")
        // }
        ...mapMutations([CHANGE_NUM]),
        //(4)actions
        // getRandom(){
        //     this.$store.dispatch("getNumFromBackEnd")
        // }
        ...mapActions(["getNumFromBackEnd"])
    },
    created(){
        //console.log(this.$store.state.num)
    }
}
</script>
<style lang="scss">
    
</style>