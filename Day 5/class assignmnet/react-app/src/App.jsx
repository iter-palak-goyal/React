import React from "react";
import GrandParent from "./PropsComponents/GrandParent.jsx";
import ContextComponent from "./ContextComponent/ContextComponent.jsx";
import ContextParent from "./ContextComponent/ContextParent.jsx";
import Products from "./Products.jsx";

const App =()=>{
    return (
        <div>
            {/* <GrandParent></GrandParent> */}
            {/* <ContextComponent>
                <ContextParent />
            </ContextComponent> */}
            <Products></Products>

        </div>
    )
}

export default App;