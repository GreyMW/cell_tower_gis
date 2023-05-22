import {MapContainer, TileLayer, useMap} from "react-leaflet";
import "../stylesheets/Map.css";
import "leaflet/dist/leaflet.css";
import {useEffect, useRef} from "react";
import MapState from "../logic/mapState.ts";


function Map({mapState}:{mapState: MapState}) {

    function SnapToPosition() {
        const map = useMap();
        const didMountRef = useRef(false);
        useEffect(() => {
            if (didMountRef && mapState.snapToPosition != null) {

                map.flyTo(mapState.snapToPosition);
                mapState.setSnapToPosition(null);
            }
            didMountRef.current = true;
        }, [mapState.snapToPosition])

        return null;
    }

    return (
        <MapContainer center={mapState.startingPosition} zoom={13} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <SnapToPosition/>
            {/*{markers.map((marker, index) => createMarker(marker, index))}*/}
        </MapContainer>
    )
}

export default Map;