import {useMap} from "react-leaflet";
import {useEffect, useRef} from "react";
import MapStateInterface from "../../../logic/object_definitions/mapStateInterface.ts";
import {LatLng} from "leaflet";

export default function GoToLocationOfInterest({mapState}: {mapState: MapStateInterface}) {

    const map = useMap();
    const didMountRef = useRef(false);
    useEffect(() => {
        if (didMountRef && mapState.locationOfInterest != null) {

            map.setView(new LatLng(mapState.locationOfInterest.latitude, mapState.locationOfInterest.longitude), mapState.locationOfInterest.zoom);
            mapState.setLocationOfInterest(null);
        }
        didMountRef.current = true;
    }, [mapState.locationOfInterest])

    return null;
}