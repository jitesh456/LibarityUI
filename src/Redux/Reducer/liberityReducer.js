
import {SET_DATA}  from '../Action/liberityAction'


const initialState={
    menuInfo:{},
}


const liberityReducer=(state=initialState,action)=>{
    switch(action.type){
        case SET_DATA : return{
            menuInfo:action.value
        }
        default:return state

    }
}
export default liberityReducer;