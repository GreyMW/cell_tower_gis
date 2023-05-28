import MapStateInterface from "../../../logic/object_definitions/mapStateInterface.ts";
import {useState} from "react";
import menuList from "../../../logic/object_definitions/menuList.ts";
import {faAngleDown} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


function ActiveLayer({mapState}: {mapState: MapStateInterface }) {
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    function handleOpen() {
        setMenuIsOpen(!menuIsOpen);
    }

    function LayerButtons(layerName: string, key: number) {
        return (
            <div key={key}>
                <button onClick={() => mapState.setCurrentLayer(layerName)}>{layerName}</button>
            </div>
        )
    }

    function handleAddDeleteLayer() {
        mapState.setCurrentMenu(menuList.add_layer);
    }

    return(
        <div className={'active-layer-container main-menu-subcontainer'}>
            <div>
                <p>Layer:</p>
            </div>

            <div className="dropdown">
                <button onClick={handleOpen}>{mapState.currentLayer} <FontAwesomeIcon icon={faAngleDown} /></button>
                {menuIsOpen ? mapState.layers.map((layerName, index) => LayerButtons(layerName.getLayerName(), index)) : null}
                {menuIsOpen ?
                    <div>
                        <button onClick={handleAddDeleteLayer} key={-1}>Add/Delete Layer</button>
                    </div>: null}
            </div>
        </div>
    )
}

export default ActiveLayer;