import MenuList from "../../../logic/object_definitions/menuList.ts";
import MapStateInterface from "../../../logic/object_definitions/mapStateInterface.ts";

export default function ButtonTowers({mapState}: {mapState: MapStateInterface}){
    const switchToCellTowerMenu = () => mapState.setCurrentMenu(MenuList.add_cell_tower_menu);

    return (
        <button className={'primary-button'} onClick={switchToCellTowerMenu}>Towers</button>
        // <button className={'primary-button'} onClick={() => mapState.setCurrentMenu(MenuList.add_cell_tower_menu)}>Towers</button>
    )
}