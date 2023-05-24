import "../stylesheets/MainMenu.css";
import MapState from "../logic/mapState.ts";
import MainMenu from "./menus/MainMenu.tsx";
import LocationsOfInterestMenu from "./menus/LocationsOfInterestMenu.tsx";
import AddPointsMenu from "./menus/AddPointsMenu.tsx";
import MenuList from "../logic/MenuList.ts";
function MenuSelector({mapState}: {mapState: MapState }){

    function Select(){
        return(
            <div>
                {mapState.currentMenu === MenuList.main ? <MainMenu mapState={mapState}/> : null}
                {mapState.currentMenu === MenuList.location_of_interest ? <LocationsOfInterestMenu mapState={mapState}/> : null}
                {mapState.currentMenu === MenuList.add_points ? <AddPointsMenu mapState={mapState}/> : null}
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