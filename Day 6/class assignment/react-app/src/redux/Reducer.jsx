let intialState = {user:[]
}
import { apiInstance } from "../AxiosInstance"
import { fetchUser,addUser,pendingUser,removeUser } from "./Action"

export let fetchAPI=  ()=>{
    return async(dispatch)=>{
        dispatch(pendingUser)
        let res = await apiInstance.get("/user")
        console.log(res);
        
        dispatch(fetchUser(res.data))
    }
}

export function reduceruser(state=intialState, action){
    switch(action.type)
    {
        case "AddUSER": return 
        case "PENDING": return {...state, loading:true}
        case "GetUSER": return{...state, loading:false,user:[...action.payload]} 
        case "REMOVEUSER":  return 
        default: return state 
    }
}