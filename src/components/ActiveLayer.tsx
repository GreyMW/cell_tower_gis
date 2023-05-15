import {useState} from "react";
import {hookSetters, actions} from "../logic/hooks.ts";

function ActiveLayer() {

    const [activeLayerDisplay, setActiveLayerDisplay] = useState(0);
    hookSetters.setActiveLayerHook(setActiveLayerDisplay);

    return(
        <div className={'active-layer-container main-menu-subcontainer'}>
            <p>Active Layer: {activeLayerDisplay}</p>
            <button onClick={() => actions.setActiveLayer()}>Increment</button>
            <button onClick={() => actions.setActiveLayer()}>Add a Layer</button>

        </div>
    )
}

export default ActiveLayer;