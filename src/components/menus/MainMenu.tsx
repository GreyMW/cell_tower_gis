import ActiveLayer from "../ActiveLayer.tsx";
import AddPoint from "../AddPoint.tsx";
import SnapTo from "../SnapTo.tsx";
import MapState from "../../logic/mapState.ts";

export default function MainMenu({mapState}: {mapState: MapState }) {
    return (
        <div>
            <p>Main Menu</p>
            <ActiveLayer/>
            <AddPoint/>
            <SnapTo mapState={mapState}/>
        </div>
    )
}