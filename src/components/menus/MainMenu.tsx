import ActiveLayer from "./menu_subitems/ActiveLayer.tsx";
import AddPoint from "../AddPoint.tsx";
import MapStateInterface from "../../logic/object_definitions/mapStateInterface.ts";
import MenuList from "../../logic/object_definitions/menuList.ts";
import "../../stylesheets/MainMenu.css";
import Spacer from "./menu_subitems/Spacer.tsx";

export default function MainMenu({mapState}: {mapState: MapStateInterface }) {
    return (
        <div className={"main-menu-container"}>
            <div>
                <h1>Crime Analysis GIS</h1>
                <Spacer/>
                <button className={'primary-button'} onClick={() => mapState.setCurrentMenu(MenuList.location_of_interest)}>Locations of Interest</button>
                <Spacer/>
                <ActiveLayer mapState={mapState}/>
                <Spacer/>
                <AddPoint/>
                <Spacer/>
            </div>

            <div className={"latlon"}>
                <div className={"ll-to-bottom"}>
                    <Spacer/>
                    <p>
                        Lat: {mapState.mapPosition?.lat.toFixed(3)} | Lon: {mapState.mapPosition?.lng.toFixed(3)} | Zoom: {mapState.zoomLevel}
                    </p>
                </div>

            </div>

        </div>
    )
}