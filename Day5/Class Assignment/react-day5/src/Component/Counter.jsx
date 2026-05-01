import { useDispatch, useSelector } from "react-redux";
import { incrementCount, decrementCount } from "../Action/ActionProvider";
import React from "react";

const Counter = () => {
  let data = useSelector((prev) => prev.count);
  let dispatch = useDispatch();
  console.log(data);

  return (
    <div>
      <h1> This is a redux Counter {data} </h1>
      <button
        onClick={() => {
          dispatch(incrementCount());
        }}
      >
        {" "}
        Increment{" "}
      </button>
      <button
        onClick={() => {
          dispatch(decrementCount());
        }}
      >
        {" "}
        Decrement{" "}
      </button>
    </div>
  );
};
export default Counter;
