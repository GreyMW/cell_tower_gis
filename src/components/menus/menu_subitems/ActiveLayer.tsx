import MapStateInterface from "../../../logic/object_definitions/mapStateInterface.ts";
import {useState} from "react";
import menuList from "../../../logic/object_definitions/menuList.ts";
import {faAngleDown, faAngleRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


function ActiveLayer({mapState}: {mapState: MapStateInterface }) {
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    function handleOpen() {
        setMenuIsOpen(!menuIsOpen);
    }

    function LayerButtons(layerName: string, key: number) {
        return (
            <div key={key}>
                <button className={'secondary-button'} onClick={() => mapState.setCurrentLayer(layerName)}>{layerName}</button>
            </div>
        )
    }

    function handleAddDeleteLayer() {
        mapState.setCurrentMenu(menuList.add_layer);
    }

    return(
        <div className={'main-menu-subcontainer'}>
            <button
                className={'primary-button'}
                onClick={handleOpen}>
                    {menuIsOpen ?
                            <p>Current Layer: {mapState.currentLayer} <FontAwesomeIcon icon={faAngleDown} /></p>:
                            <p>Current Layer: {mapState.currentLayer} <FontAwesomeIcon icon={faAngleRight} /></p>
                    }
            </button>

            {menuIsOpen ? mapState.layers.map((layerName, index) => LayerButtons(layerName.getLayerName(), index)) : null}
            {menuIsOpen ?
                <button className={'secondary-button'} onClick={handleAddDeleteLayer} key={-1}>Add/Delete Layer</button>
                : null}
        </div>
    )
}

export default ActiveLayer;