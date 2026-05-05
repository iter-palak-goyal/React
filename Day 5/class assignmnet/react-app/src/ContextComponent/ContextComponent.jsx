import React, { createContext, useState } from "react";
import ContextParent from './ContextParent';

// first we create and export the context API reference
//we use createContext method to create the context API reference
export let contextAPI = createContext();
//createContext will return an object which has three main properties
//$$typeof - identification of react node/ for the context
//consumer => properity, consumer componet consumes the the value provided by the provider and accepts in the callback functions
//provider => properity, provider component provides the value to the consumer component and accepts,
// propvider has props called 'value' in which we have to pass the the data so that consumer can consume it
const ContextComponent =(props)=>{
    //console.log("context API reference",contextAPI);
    let [state, setState] = useState({count: 0});
    //setCount(prev=>({...prev, count:state.count+1}))
    function updateState(obj){
        setState(prev=>({...prev, ...obj}))
    }
    //console.log(props);
    let {Provider} = contextAPI;
    
    return (
        <div>
            <Provider value={{name:"JECRC", state, updateState}}>
                {props.children}
            </Provider>
        </div>
    )
}

export default ContextComponent;