import {CHANGE_NUM,RANDOM_NUM} from "./const"
export default {
    [CHANGE_NUM](state){
        state.num++;//更改了state里面的值
    },
    [RANDOM_NUM](state,randomNum){
        state.num = randomNum;
    }
}