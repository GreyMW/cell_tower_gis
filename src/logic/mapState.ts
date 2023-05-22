import {LatLngTuple} from "leaflet";
import React from "react";
import snapToLocation from "./snapToLocation.ts";

interface MapState {
    startingPosition: LatLngTuple,
    zoomLevel: number,

    snapToPosition: LatLngTuple | null,
    setSnapToPosition: React.Dispatch<React.SetStateAction<LatLngTuple | null>>,
    snapToLocations: snapToLocation[],
    setSnapToLocations: React.Dispatch<React.SetStateAction<snapToLocation[]>>,
}

export default MapState;