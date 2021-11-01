<template>
    <div class="tabbar-item" @click = "change">
        <span v-if="!flag"><slot name="normalImg" ></slot></span>
        <span v-else><slot name="activeImg" ></slot></span>
        <span :class="{active:flag}">{{txt}}</span>
    </div>
</template>

<script>
export default {
    props:["txt","mark","sel"],
    computed:{
        flag(){
            if(this.mark == this.sel){
                return true
            }
            return false
        }
    },
    methods:{
        change(){
            // this.changeSelected(this.mark)
            // this.$emit("changeSelected",this.mark);
            this.$router.push("/"+this.mark)
        }
    }
}
</script>

<style lang="scss" scoped>
    .tabbar-item{
        display:flex;
        justify-content: center;
        align-items:center;
        flex:1;
        flex-direction: column;
        // background-color: pink;
        img{
            width:40px;
            height:40px;
        }
        .active{
            color:green;
        }
    }
</style>