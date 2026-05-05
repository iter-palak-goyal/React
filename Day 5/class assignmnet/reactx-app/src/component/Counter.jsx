import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementCount, decrementCount } from '../redux/action/ActionProvider';

const Counter=()=>{
    let data  = useSelector(prev=>prev.count)
    let dispatch = useDispatch()
    console.log(data);
    return(
        <div>
            <h1>this is redux count {data.count}</h1>
            <button onClick={()=>{dispatch(incrementCount())}}>Increment</button>
            <button onClick={()=>{dispatch(decrementCount())}}>Decrement</button>
        </div>
    )

}

export default Counter;