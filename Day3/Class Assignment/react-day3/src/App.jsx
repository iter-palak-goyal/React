import { useState } from "react";
import Component1 from "./Props/Component1";
import ApiCalling from "./UseEffects/ApiCalling";
import ComponentWithDependency from "./ComponentLifeCycle/ComponentWithDependency";
import ComponentWithRender from "./ComponentLifeCycle/ComponentWithRender";
import ComponentConstructor from "./ComponentLifeCycle/ComponentConstructor"
import ComponentCleanUp from "./ComponentLifeCycle/ComponentCleanUp";
function App() {
  let [count, setCount] = useState(0)

  console.log("Hi There")
  console.log(count);



  // return (
  //   <div>
  //     {/* <Component1 /> */}
  //     {/* <ApiCalling/> */}
  //     {/* {/* {count} */}
  //     {/* <button onClick={()=> {count+1}}> Increment </button> */} */}
  //     <ComponentWithDependency/>
  //   </div>
  // );

  return <div>
    {count}
    <button onClick={()=> {setCount(count+1)}}> Increment </button>
    <ComponentWithDependency/>
    {/* <ComponentWithRender/> */}
    {/* <ComponentConstructor/> */}
    

     {/* {
      !(count%5==0) && <ComponentCleanUp/>
    } */}


  </div>
}
export default App;
