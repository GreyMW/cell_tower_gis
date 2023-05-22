import {LatLngTuple} from "leaflet";
import React from "react";
import snapToLocation from "./snapToLocations.ts";

interface MapState {
    startingPosition: LatLngTuple,
    zoomLevel: number,

    snapToPosition: LatLngTuple | null,
    setSnapToPosition: React.Dispatch<React.SetStateAction<LatLngTuple | null>>,
    snapToLocations: snapToLocation[],
}

export default MapState;