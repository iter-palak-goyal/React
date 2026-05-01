import React, { useContext } from "react";
import { contextAPI } from "./ContextComponent";
import { postProduct, patchProduct } from "../APIServiceLayer/APIRequests";

const ContextChild = () => {
  let data = useContext(contextAPI);

  return (
    <div>
      {data.name}
      <h2>{data.state.count}</h2>

      <button onClick={() => {
        data.updateState({ count: data.state.count + 1 });
      }}>
        Increment
      </button>

      <button onClick={() => {
        data.updateState({ count: data.state.count - 1 });
      }}>
        Decrement
      </button>

      <button onClick={postProduct}>
        Post Data
      </button>

      <button onClick={() => {
        patchProduct("3L9zIN4PUOg");
      }}>
        Patch Data
      </button>
    </div>
  );
};

export default ContextChild;