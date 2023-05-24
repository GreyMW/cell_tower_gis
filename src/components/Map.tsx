import {MapContainer, TileLayer, useMap} from "react-leaflet";
import "../stylesheets/Map.css";
import "leaflet/dist/leaflet.css";
import {useCallback, useEffect, useRef} from "react";
import MapStateInterface from "../logic/mapStateInterface.ts";


function Map({mapState}:{mapState: MapStateInterface}) {

    function SnapToPosition() {
        const map = useMap();
        const didMountRef = useRef(false);
        useEffect(() => {
            if (didMountRef && mapState.locationOfInterest != null) {

                map.flyTo(mapState.locationOfInterest);
                mapState.setLocationOfInterest(null);
            }
            didMountRef.current = true;
        }, [mapState.locationOfInterest])

        return null;
    }

    // used to update the current lat and long coords for live display
    function UpdateMapCenter() {
        const map = useMap();
        const onMove = useCallback(() => {
            mapState.setMapPosition(map.getCenter());

        }, [map])

        useEffect(() => {
            map.on('move', onMove);
            return () => {
                map.off('move', onMove);
            }
        }, [map, onMove])

        return null;
    }

    return (
        <MapContainer center={mapState.startingPosition} zoom={mapState.zoomLevel} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <SnapToPosition/>
            <UpdateMapCenter/>
            {/*{markers.map((marker, index) => createMarker(marker, index))}*/}
        </MapContainer>

    )
}

export default Map;