import React from "react";
import Child from "./Child";


const Parent =(props)=>{
    return (
        <div>
            <h3>the surname of the parent is {props.value.surname}</h3>
            <Child value = {props}></Child>
        </div>
    )
}

export default Parent;