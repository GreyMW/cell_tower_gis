import "../stylesheets/MainMenu.css";
import MapStateInterface from "../logic/object_definitions/mapStateInterface.ts";
import MainMenu from "./menus/main_menu/MainMenu.tsx";
import LocationsOfInterestMenu from "./menus/locations_of_interest/LocationsOfInterestMenu.tsx";
import AddPointsMenu from "./menus/points/AddPointsMenu.tsx";
import MenuList from "../logic/object_definitions/menuList.ts";
import AddLocationOfInterestMenu from "./menus/locations_of_interest/add_location_of_interest/AddLocationOfInterestMenu.tsx";
import LayersMenu from "./menus/layers/LayersMenu.tsx";
import AddDeleteLayerMenu from "./menus/layers/add_delete_layers/AddDeleteLayerMenu.tsx";
import AnnotationsMenu from "./menus/annotations/AnnotationsMenu.tsx";
import LayerOptionsMenu from "./menus/layers/layer_options/LayerOptionsMenu.tsx";
import AddCellTowerMenu from "./menus/cell_towers/AddCellTowerMenu.tsx";
import PolygonMenu from "./menus/polygons/PolygonMenu.tsx";
function MenuSelector({mapState}: {mapState: MapStateInterface}){

    function Select(){
        return(
            <div className={'main-menu-container'}>
                {mapState.currentMenu === MenuList.main ? <MainMenu mapState={mapState}/> : null}
                {mapState.currentMenu === MenuList.location_of_interest ? <LocationsOfInterestMenu mapState={mapState}/> : null}
                {mapState.currentMenu === MenuList.add_location_of_interest ? <AddLocationOfInterestMenu mapState={mapState}/> : null}
                {mapState.currentMenu === MenuList.add_points ? <AddPointsMenu mapState={mapState}/> : null}
                {mapState.currentMenu === MenuList.add_delete_layer ? <AddDeleteLayerMenu mapState={mapState}/> : null}
                {mapState.currentMenu === MenuList.layer_menu ? <LayersMenu mapState={mapState}/> : null}
                {mapState.currentMenu === MenuList.annotation_menu ? <AnnotationsMenu mapState={mapState}/> : null}
                {mapState.currentMenu === MenuList.layer_options ? <LayerOptionsMenu mapState={mapState}/> : null}
                {mapState.currentMenu === MenuList.add_cell_tower_menu ? <AddCellTowerMenu mapState={mapState}/> : null}
                {mapState.currentMenu === MenuList.polygon_menu ? <PolygonMenu mapState={mapState}/> : null}

            </div>
        )
    }

    return (
        <div className={'main-menu-container'}>
            <Select/>
        </div>
    )
}

export default MenuSelector;