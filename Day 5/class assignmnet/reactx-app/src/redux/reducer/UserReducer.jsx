let intialState = {user:[
    {name:"sachin"},{name:"sheety"},{name:"raghu"}
]}

export function addUserAction(data){
    return{type:"addUser",payload:data}
}

export function RemoveUserAction(data){
    return{type:"removeUser",payload:data}
}


export function UserReducer(state = intialState, action){
    switch(action.type){
        case "removeUser":
            {
                return {...state, user:state.user.filter(v=>v.name!= action.payload)}
            }
        case "addUser":
            {
                console.log(action.payload);
                return {...state, user:[...state.user, action.payload]}
            }
        default:
            return state;
    }
}