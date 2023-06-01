import MapStateInterface from "../../../logic/object_definitions/mapStateInterface.ts";
import {useState} from "react";
import {faAngleDown, faAngleRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


function ActiveLayer({mapState}: {mapState: MapStateInterface }) {
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    function handleOpen() {
        setMenuIsOpen(!menuIsOpen);
    }

    function LayerButtons(layerName: string, key: number) {
        return (
            <button key={key} className={'secondary-button'} onClick={() => mapState.setCurrentLayer(layerName)}>{layerName}</button>
        )
    }

    return(
        <div className={'sub-menu-container'}>
            <button
                className={'primary-button'}
                onClick={handleOpen}>
                    {menuIsOpen ?
                            <p>Current Layer: {mapState.currentLayer} <FontAwesomeIcon icon={faAngleDown} /></p>:
                            <p>Current Layer: {mapState.currentLayer} <FontAwesomeIcon icon={faAngleRight} /></p>
                    }
            </button>

            {menuIsOpen ? mapState.layers.map((layerName, index) => LayerButtons(layerName.getLayerName(), index)) : null}

        </div>
    )
}

export default ActiveLayer;