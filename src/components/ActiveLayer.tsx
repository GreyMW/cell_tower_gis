import {useState} from "react";
import {hookSetters, setters} from "../logic/hooks.ts";

function ActiveLayer() {

    const [activeLayerDisplay, setActiveLayerDisplay] = useState(0);
    hookSetters.setActiveLayerHook(setActiveLayerDisplay);

    return(
        <div className={'active-layer-container main-menu-subcontainer'}>
            <p>Active Layer: {activeLayerDisplay}</p>
            <button onClick={() => setters.setActiveLayer()}>Increment</button>
            <button onClick={() => setters.setActiveLayer()}>Add a Layer</button>

        </div>
    )
}

export default ActiveLayer;