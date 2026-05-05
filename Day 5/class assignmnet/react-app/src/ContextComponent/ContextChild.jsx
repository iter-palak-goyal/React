import React,{useContext} from "react";
import {contextAPI} from "./ContextComponent.jsx";
import { getOneProduct, getProducts, patchProduct, postProduct } from "../APIServiceLayer/APIRequests.jsx";

const ContextChild =()=>{
    //let {Consumer} = contextAPI;
    let data = useContext(contextAPI);
    return (
        <div>
            {data.name}
            {/* <Consumer>
                {(value)=>{console.log(value)
                }}
            </Consumer> */}
            <h2>{data.state.count}</h2>
            <button onClick = {()=>{
                data.updateState({count:data.state.count+1})
            }}>Increment</button>

            <button onClick = {()=>{
                data.updateState({count:data.state.count-1})
            }}>Decrement</button>

            <button onClick={()=>{
                postProduct()
            }}>post the data</button>

            <button onClick={()=>{
                patchProduct("7bfFoRAO1vU", {city:"Ramgudh"});
            }}>patch the id</button>

            <button onClick={()=>{
                getProducts();
            }}>get products</button>

            <button onClick={()=>{
                getOneProduct("7bfFoRAO1vU");
            }}>get product</button>

            <button onClick={()=>{
                deleteProduct("7bfFoRAO1vU");
            }}>delete product</button>
        </div>
    )
};

export default ContextChild;