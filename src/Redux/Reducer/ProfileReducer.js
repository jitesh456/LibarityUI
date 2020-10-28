
import {SET_PROFILE_DATA,SET_PRODUCT_DATA,
    SET_SUPPORT_DATA,SET_STORE_DATA,SET_SALES_INFO,SET_Table_Data}  from '../Action/liberityAction'


const initialState={
    profile:{},
    product:{},
    support:{},
    store:{},
    salesInfo:{},
    tableData:[]
}


const ProfileReducer=(state=initialState,action)=>{
    switch(action.type){

        case SET_PROFILE_DATA:return{
            ...state,
            profile:action.value
        }
        case SET_PRODUCT_DATA:return{
            ...state,
            product:action.value
        }
        case SET_SUPPORT_DATA:return{
            ...state,
            support:action.value
  
        }
        case SET_STORE_DATA:return{
            ...state,
            store:action.value
  
        }
        case SET_SALES_INFO:return{
            ...state,
            salesInfo:action.value  
        }
        case SET_Table_Data:return{
            ...state,
            tableData:action.value
  
        }
        default:return state

    }
}
export default ProfileReducer;