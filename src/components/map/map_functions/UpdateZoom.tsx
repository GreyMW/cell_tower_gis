import {useMap} from "react-leaflet";
import {useCallback, useEffect} from "react";
import MapStateInterface from "../../../logic/object_definitions/mapStateInterface.ts";

export default function UpdateZoom({mapState}: {mapState: MapStateInterface }) {
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