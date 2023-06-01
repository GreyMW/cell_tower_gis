import MenuList from "../../../logic/object_definitions/menuList.ts";
import MapStateInterface from "../../../logic/object_definitions/mapStateInterface.ts";

export default function ButtonLayers({mapState}: {mapState: MapStateInterface }) {
    return (
        <button className={'primary-button'} onClick={() => mapState.setCurrentMenu(MenuList.layer_menu)}>Layers</button>
    )
}