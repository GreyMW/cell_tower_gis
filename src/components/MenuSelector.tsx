import "../stylesheets/MainMenu.css";
import MapState from "../logic/mapState.ts";
import MainMenu from "./menus/MainMenu.tsx";
import SnapToLocationMenu from "./menus/SnapToLocationMenu.tsx";
import AddPointsMenu from "./menus/AddPointsMenu.tsx";

function MenuSelector({mapState}: {mapState: MapState }){

    function Select(){
        return(
            <div>
                {mapState.currentMenu === "main" ? <MainMenu mapState={mapState}/> : null}
                {mapState.currentMenu === "snap_to_location" ? <SnapToLocationMenu/> : null}
                {mapState.currentMenu === "add_points" ? <AddPointsMenu/> : null}
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

