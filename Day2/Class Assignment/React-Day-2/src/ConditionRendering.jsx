import React, { useState } from "react";

const ConditionRendering = () => {
  let [flag, setFlag] = useState(true);
  return (
    <>
      <button
        onClick={() => {
          setFlag(!flag);
        }}
      >
        {" "}
        Change the flag{" "}
      </button>
      {flag ? (
        <div
          style={{ height: "300px", background: "pink", width: "400px" }}
        ></div>
      ) : (
        <div style={{ height: "200px", background: "purple", width: "400px" }}>
          {" "}
        </div>
      )}
      {flag && <h1> This is true </h1>}{" "}
    </>
  );
};
export default ConditionRendering;
