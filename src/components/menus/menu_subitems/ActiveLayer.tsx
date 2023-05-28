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

    function SelectActiveLayer() {
        return (
            <div>
                <div>
                    <button>Is Open</button>
                </div>
                <div>
                    <button onClick={handleAddDeleteLayer}>Add/Delete Layer</button>
                </div>
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
                {menuIsOpen ? SelectActiveLayer() : null}
            </div>
        </div>
    )
}

export default ActiveLayer;