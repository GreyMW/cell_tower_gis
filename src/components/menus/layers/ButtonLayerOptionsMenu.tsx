import MapStateInterface from "../../../logic/object_definitions/mapStateInterface.ts";
import MenuList from "../../../logic/object_definitions/menuList.ts";

export default function ButtonLayerOptionsMenu({mapState}: {mapState: MapStateInterface }) {
    return (
        <button className={'primary-button'} onClick={() => mapState.setCurrentMenu(MenuList.layer_options)}>Layer Options</button>
    )
}