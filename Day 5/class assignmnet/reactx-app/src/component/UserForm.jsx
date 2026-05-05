import React , {Fragment, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addUserAction, RemoveUserAction } from '../redux/reducer/UserReducer';

const UserForm = () => {
    let [state, setState] = useState({name:""})
    let data = useSelector(prev=>prev.userred)
    let dispatch = useDispatch()
    console.log(data);
    return(
        <div>
            <form onSubmit = {(e)=>{
                e.preventDefault();
                dispatch(addUserAction(state))
            }}>
                <input type="text" name={"name"} onChange={(e)=>{
                    setState(prev=>({...prev,[e.target.name]:e.target.value}))
                }}></input>
                <br />
                <button>submit</button>
            </form>
            <>
                <br />
                {data.user.map(v=>{
                return <Fragment key = {v.name}>{v.name}
                <button onClick={()=>{
                    dispatch(RemoveUserAction(v.name))
                }}>delete</button><br />
                </Fragment>})}
            </>
        </div>
    )
}

export default UserForm;