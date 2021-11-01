import {RANDOM_NUM} from "./const"
export default {
    getNumFromBackEnd(cxt){
        //异步请求数据
        setTimeout(()=>{
            let random = Math.floor(Math.random()*100)
            cxt.commit(RANDOM_NUM,random)
        },1000)
    }
}