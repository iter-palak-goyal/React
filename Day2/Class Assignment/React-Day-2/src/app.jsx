import ClassBased from "./classBased";
import ConditionRendering from "./ConditionRendering";
import FunctionBased from "./functionBased";
import ArrowFunction from "./functionBased2";
import FunctionBased3 from "./functionBased3";
import ControlledForms from "./ConditionForm";
function App() {
  //   return <div>
  //     {(()=> {
  //       return <h1>
  //         this is the IIFE
  //       </h1>
  //     })}
  //     <h3> this is a h3 heading </h3>
  //     <ClassBased/>
  //     <functionBased/>
  //     {/* {

  //       (new ClassBased()).render()
  //     } */}

  //      </div>
  // }

  return (
    <div>
      <ClassBased />
      <FunctionBased />
      <ArrowFunction />
      <FunctionBased3 />
      <ConditionRendering />
      <ControlledForms />
    </div>
  );
}

export default App;
