// import {setActiveLayer, setActiveLayerHook} from "../map_logic/map_logic.ts";
import {setters, hookSetters} from "../map_logic/map_logic.ts";
import {useState} from "react";

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