import {MapContainer, TileLayer, useMap} from "react-leaflet";
import "../../stylesheets/Map.css";
import "leaflet/dist/leaflet.css";
import {useCallback, useEffect, useRef} from "react";
import MapStateInterface from "../../logic/object_definitions/mapStateInterface.ts";


function Map({mapState}:{mapState: MapStateInterface}) {

    //TODO: move this to it's own file
    function FlyToPosition() {

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

    //TODO: move this to it's own file
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

    function UpdateZoomDisplay() {
        const map = useMap();
        const onZoomChange = useCallback(() => {
            mapState.setZoomLevel(map.getZoom());
        }, [map])

        useEffect(()=> {
            map.on('zoom', onZoomChange);
            return () => {
                map.off('zoom', onZoomChange);
            }
        }, [map, onZoomChange])

        return null;
    }

    return (
        <MapContainer center={mapState.startingPosition} zoom={mapState.zoomLevel} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <FlyToPosition/>
            <UpdateMapCenter/>
            <UpdateZoomDisplay/>
            {/*{markers.map((marker, index) => createMarker(marker, index))}*/}
        </MapContainer>

    )
}

export default Map;