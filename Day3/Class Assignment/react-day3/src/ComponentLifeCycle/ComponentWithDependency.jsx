import React, { useEffect, useState } from "react";

const ComponentWithDependency = () => {
  let [count2, setCount2] = useState({value:0, name:"Robinhood"})
  useEffect(() => {
    console.log("Thi is coming from dependency")
  }, [count2.name, count2.value])
  return (
    <div> 
      <h1> Component With Dependency {count2.value} </h1>
      <button onClick={() => {
        setCount2(prev=>({...prev, name:prev.name==="Robinhood"?"Old Monk":"Robinhood"}))
      }}> Change Name </button>
      <button onClick={() => { setCount2(prev=>({...prev, value:count2.value+1}))}}> Increment </button>
      <h2> {count2.name} </h2>
    </div>
  )
}
export default ComponentWithDependency;