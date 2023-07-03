import MenuList from "../../../logic/object_definitions/menuList.ts";
import MapStateInterface from "../../../logic/object_definitions/mapStateInterface.ts";

function ButtonAddAnnotations({mapState}: {mapState: MapStateInterface}){

    return (
        <button className={'primary-button'} onClick={() => mapState.setCurrentMenu(MenuList.annotation_menu)}>Annotations</button>
    )
}

export default ButtonAddAnnotations;