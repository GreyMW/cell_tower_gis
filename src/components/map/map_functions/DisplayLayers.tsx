import MapStateInterface from "../../../logic/object_definitions/mapStateInterface.ts";
import MapLayer from "../../../logic/object_definitions/mapLayer.ts";
import MapMarker from "../../../logic/object_definitions/mapMarker.ts";
import {Circle} from "react-leaflet";

export default function DisplayLayers({mapState}: {mapState: MapStateInterface }) {
    return (
        <div>
            {mapState.layers.map((layer, index) => DisplayMarkers(index, layer))}
            {/*//TODO: Display Celltowers*/}
        </div>
    )
}

function DisplayMarkers(index: number, layer: MapLayer) {
    if (!layer.getVisibility()) {
        return null;
    }
    return (
        <div key={index}>
            {layer.getMarkers().map((marker, index) => DrawMarker(marker, index))}
        </div>
    )
}
function DrawMarker(marker: MapMarker, index: number) {
    return (
        <Circle
            center={[marker.latitude, marker.longitude]}
            radius={30}
            key={index}
            pathOptions={{
                color: marker.color,
                fillColor: marker.fillColor,
                fillOpacity: marker.fillOpacity,
                stroke: marker.stroke,
                weight: marker.weight,
                opacity: marker.opacity
            }
            }/>
    )
}