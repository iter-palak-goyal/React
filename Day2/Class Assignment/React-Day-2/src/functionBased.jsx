import { useState } from "react";

function FunctionBased() {
  // return <div>
  //     <h1> Hi is function based componenet. </h1>
  //   </div>

  let [state, setState] = useState(10);

  // console.log(state)
  // console.log(useState)

  let a = 20;
  return (
    <>
      {" "}
      {a}
      <hr />
      <button
        onClick={() => {
          a += 20;
          setState((state += 10));
          console.log("===================");
          console.log(state);
          console.log("===================");
        }}
      >
        {" "}
        Increment{" "}
      </button>
      <button
        onClick={() => {
          state += 10;
          console.log(state);
        }}
      >
        {" "}
        Hi, increment this number{" "}
      </button>
      <h1> {state} </h1> state
    </>
  );
}
export default FunctionBased;
