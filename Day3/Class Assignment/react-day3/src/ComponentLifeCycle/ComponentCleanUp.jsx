import React, { useEffect } from "react";

const ComponentCleanUp = () => {
  useEffect(() => {
    return() => {
      console.log("we are ckeaning up the GC")
    }
  }, [])
  return (
    <div style= {{backgroundColor: "navy", color:"white"}}> 
    <h1> Component clean up </h1>
    </div>
  )
}
export default ComponentCleanUp