import ActiveLayer from "../ActiveLayer.tsx";
import AddPoint from "../AddPoint.tsx";
import MapStateInterface from "../../logic/object_definitions/mapStateInterface.ts";
import MenuList from "../../logic/object_definitions/menuList.ts";

export default function MainMenu({mapState}: {mapState: MapStateInterface }) {
    return (
        <div>
            <p>Main Menu</p>
            <button onClick={() => mapState.setCurrentMenu(MenuList.location_of_interest)}>Go to Snap Menu</button>
            <ActiveLayer/>
            <AddPoint/>
            <p>
                latitude: {mapState.mapPosition?.lat.toFixed(4)}, longitude: {mapState.mapPosition?.lng.toFixed(4)}
            </p>
            <p>
                Zoom: {mapState.zoomLevel}
            </p>
        </div>
    )
}