import {useMap} from "react-leaflet";
import {useEffect, useRef} from "react";
import MapStateInterface from "../../../logic/object_definitions/mapStateInterface.ts";

export default function ZoomTo({mapState}: {mapState: MapStateInterface}) {

    const map = useMap();
    const didMountRef = useRef(false);
    useEffect(() => {
        if (didMountRef && mapState.zoomLevel != null) {

            map.setZoom(mapState.zoomLevel);
            // mapState.setLocationOfInterest(null);
        }
        didMountRef.current = true;
    }, [mapState.zoomLevel])

    return null;
}