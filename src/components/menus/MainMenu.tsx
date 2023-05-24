import ActiveLayer from "../ActiveLayer.tsx";
import AddPoint from "../AddPoint.tsx";
import MapState from "../../logic/mapState.ts";

export default function MainMenu({mapState}: {mapState: MapState }) {
    return (
        <div>
            <p>Main Menu</p>
            <button onClick={() => mapState.setCurrentMenu("snap_to_location")}>Go to Snap Menu</button>
            <ActiveLayer/>
            <AddPoint/>
        </div>
    )
}