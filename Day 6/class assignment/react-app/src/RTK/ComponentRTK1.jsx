// import React from "react";
// import {useDispatch, useSelector} from "react-redux";
// import { adduser } from "./feature/userSlice";

// const ComponentRTK1 = ()=>{

//     let data = useSelector((prev)=>prev)
//     console.log(data);
//     let dispatch = useDispatch()
//     return (
//         <div>
//             <button onClick={()=>{
//                 dispatch(adduser("this is the jaipur"))
//             }}>addUser</button>
//         </div>
//     )
// }

// export default ComponentRTK1;
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { adduser, setUsers, updateUser } from "./feature/userSlice";
import { API } from "./API";

const ComponentRTK1 = () => {

    const dispatch = useDispatch();
    const users = useSelector(state => state.user.users);

    const [name,setName] = useState("");
    const [editId,setEditId] = useState(null);

    // GET users on load
    const getUsers = async ()=>{
        const res = await API.get("/users");
        dispatch(setUsers(res.data));
    }

    useEffect(()=>{
        getUsers();
    },[])

    // POST USER
    const addUserHandler = async ()=>{
        const res = await API.post("/users",{name});
        dispatch(adduser(res.data));
        setName("");
    }

    // PUT USER
    const updateUserHandler = async ()=>{
        const res = await API.put(`/users/${editId}`,{id:editId,name});
        dispatch(updateUser(res.data));
        setEditId(null);
        setName("");
    }

    return (
        <div style={{padding:"20px"}}>
            <h2>RTK POST & PUT (Simple)</h2>

            <input 
                value={name}
                onChange={(e)=>setName(e.target.value)}
                placeholder="Enter name"
            />

            {
                editId ?
                <button onClick={updateUserHandler}>Update</button>
                :
                <button onClick={addUserHandler}>Add</button>
            }

            <hr/>

            {users.map((u)=>(
                <div key={u.id}>
                    {u.name}
                    <button onClick={()=>{
                        setEditId(u.id)
                        setName(u.name)
                    }}>
                        Edit
                    </button>
                </div>
            ))}
        </div>
    )
}

export default ComponentRTK1;