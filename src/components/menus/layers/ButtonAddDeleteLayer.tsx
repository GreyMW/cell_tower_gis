import MenuList from "../../../logic/object_definitions/menuList.ts";
import MapStateInterface from "../../../logic/object_definitions/mapStateInterface.ts";

export default function ButtonAddDeleteLayer({mapState}: {mapState: MapStateInterface }) {
    return (
        <button className={'primary-button'} onClick={() => mapState.setCurrentMenu(MenuList.add_delete_layer)}>Add/Delete Layers</button>
    )
}