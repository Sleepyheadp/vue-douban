<template>
    <div class="movie-box"
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="10"
    > 
        <MovieItem
            v-for = "movie in movies"
            :key = "movie.id"
            :movie = "movie"
        ></MovieItem>
    </div>
</template>
<script>
import MovieItem from "./MovieItem.vue"
import {Toast} from "mint-ui"
export default {
    props:["type"],
    components:{
        MovieItem
    },
    data(){
        return {
            movies:[],
            loading:false,//开启无限滚动
            limit:6,//每页显示六条数据
            page:1,//默认请求第一页的数据
            hasMore:true//代表有更多数据
        }
    },
    watch:{
        type(){
            this.movies = []; //切换数据时，清空之前请求的数据
            this.page = 1;//每当切换时都从第一页开始请求数据
            this.hasMore = true;//有更多数据
            this.getMovies()//请求数据
        }
    },
    methods:{
        loadMore(){
            if(!this.hasMore){//如果没有更多数据了
                this.loading = true;//则关闭无限滚动
                //添加一个弹出框--请求数据的提示
                Toast({
                    message: '我是有底线的...',
                    position:"bottom",
                    duration:1000
                });
                return false//阻断后续代码执行
            }
            //否则请求数据，开启无限滚动...
            this.getMovies()
        },
        getMovies(){
            let {limit,page} = this;
            this.loading = true;//关闭无限滚动
            //在请求数据的时候添加一个“数据请求弹窗...”
            let instance = Toast({
                message:"正在加载中...",
                iconClass:"fa fa-circle-o-notch fa-spin",
                duration:1000
            })
            this.$http.get("/api/db/"+this.type,{
                params:{
                    limit,
                    page,
                }
            }).then(res=>{
                this.loading = false;//开启无限滚动
                this.movies = this.movies.concat(res.data.object_list);
                if(this.limit * this.page >= res.data.total){
                    this.hasMore = false//代表没有更多数据了
                    return false//阻断后续代码的执行
                }
                this.page++
            })
        }
    },
    activated(){
        //开启无限滚动
        this.loading = false;
    },
    deactivated(){
        //关闭无限滚动
        this.loading = true;
    },
    created(){
    }
}
</script>
<style lang="scss">
    .movie-box{
        padding:5px 10px;
    }
</style>