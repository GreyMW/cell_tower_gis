import {useMap} from "react-leaflet";
import {useCallback, useEffect} from "react";
import MapStateInterface from "../../logic/object_definitions/mapStateInterface.ts";

export default function UpdateMapCenter({mapState}: {mapState: MapStateInterface}) {
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