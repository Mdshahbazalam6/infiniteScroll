import { GET_USER, LOGIN, LOGOUT } from "./actionType"

const state = {
    user : [],
    loginStatus:false
}

export const reducer = ( initState=state,{type,payload}) =>{
    switch(type){
        case GET_USER :{
          return {
            ...initState,user : payload
          }
        }
        case LOGIN :{
          return {
            ...initState,loginStatus:true
          }
        }
        case LOGOUT :{
          return {
            ...initState,loginStatus:false
          }
        }
        default :
        return initState
    }
}