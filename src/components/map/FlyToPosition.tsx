import {useMap} from "react-leaflet";
import {useEffect, useRef} from "react";
import MapStateInterface from "../../logic/object_definitions/mapStateInterface.ts";

export default function FlyToPosition({mapState}: {mapState: MapStateInterface}) {

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