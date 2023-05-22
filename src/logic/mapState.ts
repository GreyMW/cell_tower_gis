import {LatLngTuple} from "leaflet";
import React from "react";
import snapToLocation from "./snapToLocation.ts";

interface MapState {

    currentMenu: string,
    setCurrentMenu: React.Dispatch<React.SetStateAction<string>>,

    currentLayer: string,
    setCurrentLayer: React.Dispatch<React.SetStateAction<string>>,

    startingPosition: LatLngTuple,

    zoomLevel: number,
    setZoomLevel: React.Dispatch<React.SetStateAction<number>>,

    snapToPosition: LatLngTuple | null,
    setSnapToPosition: React.Dispatch<React.SetStateAction<LatLngTuple | null>>,

    snapToLocations: snapToLocation[],
    setSnapToLocations: React.Dispatch<React.SetStateAction<snapToLocation[]>>,
}

export default MapState;