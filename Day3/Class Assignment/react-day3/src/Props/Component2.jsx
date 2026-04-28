import React from "react";
import Component3 from "./Component3";
const Component2 = (props1) => {
  console.log(props1);
  let { num, setNum } = props1;

  // console.log("Props of Component2")
  // console.log(props1)
  // console.log(Object.isFrozen(props))
  return (
    <div>
      {/* <h1> Component2 </h1> */}
      <h1> Component2 count {num.count} </h1>
      {/* <Component3 info={props1} /> */}
      <button
        onClick={() => {
          setNum((prev) => ({ ...prev, count: num.count + 1 }));
        }}
      >
        {" "}
        Increment{" "}
      </button>
    </div>
  );
};
export default Component2;
