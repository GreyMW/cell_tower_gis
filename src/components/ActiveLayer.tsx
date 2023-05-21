import {useState} from "react";

function ActiveLayer() {

    const [activeLayerDisplay, setActiveLayerDisplay] = useState(0);

    return(
        <div className={'active-layer-container main-menu-subcontainer'}>
            <p>Active Layer: {activeLayerDisplay}</p>
            <button onClick={() => console.log("todo")}>Increment</button>
            <button onClick={() => console.log("todo")}>Add a Layer</button>

        </div>
    )
}

export default ActiveLayer;