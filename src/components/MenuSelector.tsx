import "../stylesheets/MainMenu.css";
import MapStateInterface from "../logic/object_definitions/mapStateInterface.ts";
import MainMenu from "./menus/main_menu/MainMenu.tsx";
import LocationsOfInterestMenu from "./menus/locations_of_interest/LocationsOfInterestMenu.tsx";
import AddPointsMenu from "./menus/AddPointsMenu.tsx";
import MenuList from "../logic/object_definitions/menuList.ts";
import AddLocationOfInterestMenu from "./menus/locations_of_interest/AddLocationOfInterestMenu.tsx";
import LayerMenu from "./menus/LayerMenu.tsx";
function MenuSelector({mapState}: {mapState: MapStateInterface }){

    function Select(){
        return(
            <div className={'main-menu-container'}>
                {mapState.currentMenu === MenuList.main ? <MainMenu mapState={mapState}/> : null}
                {mapState.currentMenu === MenuList.location_of_interest ? <LocationsOfInterestMenu mapState={mapState}/> : null}
                {mapState.currentMenu === MenuList.add_location_of_interest ? <AddLocationOfInterestMenu mapState={mapState}/> : null}
                {mapState.currentMenu === MenuList.add_points ? <AddPointsMenu mapState={mapState}/> : null}
                {mapState.currentMenu === MenuList.add_layer ? <LayerMenu mapState={mapState}/> : null}
                {mapState.currentMenu === MenuList.layer ? <LayerMenu mapState={mapState}/> : null}
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