import "../stylesheets/MainMenu.css";
import MapState from "../logic/mapState.ts";
import MainMenu from "./menus/MainMenu.tsx";
import LocationsOfInterestMenu from "./menus/LocationsOfInterestMenu.tsx";
import AddPointsMenu from "./menus/AddPointsMenu.tsx";

function MenuSelector({mapState}: {mapState: MapState }){

    function Select(){
        return(
            <div>
                {mapState.currentMenu === "main" ? <MainMenu mapState={mapState}/> : null}
                {mapState.currentMenu === "snap_to_location" ? <LocationsOfInterestMenu mapState={mapState}/> : null}
                {mapState.currentMenu === "add_points" ? <AddPointsMenu mapState={mapState}/> : null}
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