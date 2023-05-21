import "../stylesheets/MainMenu.css";
import ActiveLayer from "./ActiveLayer.tsx";
import AddPoint from "./AddPoint.tsx";
import SnapTo from "./SnapTo.tsx";
import MapState from "../logic/mapState.ts";

function MainMenu({mapState: MapState}){

    return (
        <div className={'main-menu-container'}>
            <p>Main Menu</p>
            <ActiveLayer/>
            <AddPoint/>
            <SnapTo/>
        </div>
    )
}

export default MainMenu;