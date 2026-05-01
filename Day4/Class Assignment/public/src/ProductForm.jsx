import React, { useState } from "react";
import { postProduct } from "./APIServiceLayer/APIRequests";

const ProductForm = ({setCount}) => {
  let [product, setProduct] = useState();

  //Synthetic Events: it is a wrapper event which wraps around the browser's naive event and provides some additional features/properties. 

  function onChangeEvent(e) {
    // console.log("we are changing something")
    // console.log(e.target.value);
    // console.log(e.target.name);
    setProduct(prev => ({...prev, [e.target.name]: e.target.value }))
    // console.log(product)
    
  }

  return (
  <>
  <form onSubmit={(e) => {e.preventDefault(); postProduct(product); setCount(prev=> prev+1); }}>
    <div>
      <input type="text" name="name" value={product?.name || ""} onChange={(e)=> {
        console.log(e)
        onChangeEvent(e)
      }}/>
    </div>
    <div>
      <input type="text" name="description" value={product?.description || " "} onChange={(e)=> {
        console.log(e)
        onChangeEvent(e)
      }}/>
    </div>
    <button> submit the Form </button>
  </form>
  </>
  );
};

export default ProductForm;
