// import { createSlice } from "@reduxjs/toolkit";

// let userSlice = createSlice({
//     name:"usersSlice",
//     initialState:{users:[]},
//     reducers:{
//         adduser:(state,action)=>{
//             //state.user.push(action.payload)
//             // console.log(action);  
//             console.log(state); 
//             state = {...state,users:[...state.users,action.payload]}
//             return state
//         }
//     },
// })

// export let {adduser} = userSlice.actions
// export default userSlice.reducer
import { createSlice } from "@reduxjs/toolkit";

let userSlice = createSlice({
    name:"usersSlice",
    initialState:{ users:[] },

    reducers:{
        setUsers:(state,action)=>{
            state.users = action.payload
        },

        adduser:(state,action)=>{
            state.users.push(action.payload)
        },

        updateUser:(state,action)=>{
            const index = state.users.findIndex(u => u.id === action.payload.id)
            state.users[index] = action.payload
        }
    },
})

export const { adduser, setUsers, updateUser } = userSlice.actions
export default userSlice.reducer
//npm i @reduxjs/toolkit