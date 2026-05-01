import React, { useEffect } from "react";

const ComponentConstructor = () => {
  useEffect(()=> {
    console.log("This is from the useEffect")
  }, [])
  return (
    <div> ComponentConstructor </div>
  )
}
export default ComponentConstructor