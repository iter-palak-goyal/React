import React, { useEffect, useState } from "react";

const ComponentWithRender = () => {
  useEffect(() => {
    console.log("This is useEffect");
  })
  return (
    <div> 
      Component with render 
    </div>
  )
}
export default ComponentWithRender;