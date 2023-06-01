import Spacer from "./Spacer.tsx";
import MapStateInterface from "../../../logic/object_definitions/mapStateInterface.ts";

export default function LatLonZoomViewer({mapState}: {mapState: MapStateInterface}) {
    return (
        <div className={"latlon"}>
            <div className={"ll-to-bottom"}>
                <Spacer/>
                <p>
                    Lat: {mapState.mapPosition?.lat.toFixed(3)} | Lon: {mapState.mapPosition?.lng.toFixed(3)} | Zoom: {mapState.zoomLevel}
                </p>
            </div>

        </div>
    )
}