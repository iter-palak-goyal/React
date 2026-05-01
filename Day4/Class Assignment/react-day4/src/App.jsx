import React, { useState } from "react";
import GrandParent from "./PropsComponent/GrandParent";
import ContextComponent from "./ContextComponent/ContextComponent";
import ContextChild from "./ContextComponent/ContextChild";
import ContextParent from "./ContextComponent/ContextParent";

function App() {
  return (
    <>
      {/* <GrandParent/> */}
      {/* <h1> Hi there, this is a custome tag. </h1> */}
      <ContextComponent>
        <ContextParent/>
      </ContextComponent>
    </>
  );
}

export default App;
