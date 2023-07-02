import MenuList from "../../../logic/object_definitions/menuList.ts";
import MapStateInterface from "../../../logic/object_definitions/mapStateInterface.ts";

function ButtonAddPoint({mapState}: {mapState: MapStateInterface }){

    return (
        <button className={'primary-button'} onClick={() => mapState.setCurrentMenu(MenuList.add_points)}>Points</button>
    )
}

export default ButtonAddPoint;