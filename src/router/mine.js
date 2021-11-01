export default {
    path:"/mine",
    component:()=>import("@/views/Mine/Mine"),
    children:[
        {path:"",redirect:"list"},
        {path:"list",name:"list",component:()=>import("@/views/Mine/List")},
        {path:"car",name:"car",component:()=>import("@/views/Mine/Shoppingcar")}
    ]
}