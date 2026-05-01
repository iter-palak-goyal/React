import React from "react";
import Child from "./Child";
const Parent = (props) => {
  return (
    <div>
      <h1> The surname of the parent is {props.value.surname} </h1>
      <Child value={props} />
    </div>
  )
} 

export default Parent