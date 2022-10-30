import { GET_USER, LOGIN, LOGOUT } from "./actionType"

const getData = ( payload ) =>{
    return{
        type:GET_USER,
        payload
    }
}

export const login = () =>{
    return{
        type:LOGIN
    }
}
export const logout = () =>{
    return{
        type:LOGOUT
    }
}
export async function getpostData ( dispatch,length ){  //this function will make the API call and then will call action that is getData
    try {
        let res = await fetch(`https://randomuser.me/api/?results=${length}`)
        let data = await res.json()
        dispatch(getData(data.results))
    } catch (error) {
        console.log(error)
    }
}