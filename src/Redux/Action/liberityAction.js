
export  const SET_DATA="Set Data";
export  const SET_PROFILE_DATA="Set Profile Data";
export  const SET_PRODUCT_DATA="Set Product Data";
export  const SET_SUPPORT_DATA="Set Support Data";
export  const SET_STORE_DATA="Set Store Data";
export  const SET_SALES_INFO="Set Sales Info";
export  const SET_Table_Data="Set Table Data";

export const setMenuInfo=(data)=>{
    return{
        type:SET_DATA,
        value:data
    } 
}

export const setProfile=(data)=>{
    return{
        type:SET_PROFILE_DATA,
        value:data
    } 
}

export const setProduct=(data)=>{
    return {
        type:SET_PRODUCT_DATA,
        value:data
    } 
}
export const setSupport=(data)=>{
    return {
        type:SET_SUPPORT_DATA,
        value:data
    } 
}
export const setStore=(data)=>{
    return {
        type:SET_STORE_DATA,
        value:data
    } 
}
export const setSalesInfo=(data)=>{
    return {
        type:SET_SALES_INFO,
        value:data
    } 
}
export const setTableData=(data)=>{
    return {
        type:SET_Table_Data,
        value:data
    } 
}