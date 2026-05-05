import React, { useState } from "react";
import { postProduct } from "./APIServiceLayer/APIRequests";

const ProductForm = ({setCount}) => {
    let [product, setProducts] = useState({})
    // react has synthetic events
    //synthetic events - is a wrapper event wraps around the browser event (native event)
    // and provides some additional features

    function onChangeFunction(e) {
        //console.log("we are changing something");
        setProducts(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }
    return (
        <>
            <form onSubmit={(e)=>{e.preventDefault();postProduct(product);setCount((prev)=>prev+1);}}>
                <div>
                    <input type="text" name="name" value={product?.name || ""} onChange={(e) => {
                        onChangeFunction(e)
                    }} />
                </div>
                <div>
                    <input type="text" name="description" value={product?.description || ""} onChange={(e) => {
                        onChangeFunction(e)
                    }} />
                </div>
                <button>submit the form</button>
            </form>
        </>
    )

}

export default ProductForm;