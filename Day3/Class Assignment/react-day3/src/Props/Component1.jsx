import { useState } from "react";
import Component2 from "./Component2";
import Component3 from "./Component3";
function Component1() {
  let [num, setNum] = useState({ count: 0 });
  return (
    <>
      {/* <h1> This is the H1.  </h1>
  <Component2 by="JECRC" class={["Ram", "Shyam", "Geeta"]} info={{class:"Class is getting Shifted."}}/> */}
      <h1> The current count {num.count} </h1>
      <Component2 {...{ num, setNum }} />
      <Component3 currentNum={{ num, setNum }} />
      <hr />
    </>
  );
}
export default Component1;
