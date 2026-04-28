import React from "react";
const Component3 = (props) => {
  const { num, setNum } = props.currentNum;
  return (
    <>
      <h2> Component 3 count {num.count} </h2>
      <button onClick={() => {
        setNum(prev => ({ ...prev, count: prev.count - 1 }));
      }}>
        Decrement
      </button>
    </>
  );
};

export default Component3;