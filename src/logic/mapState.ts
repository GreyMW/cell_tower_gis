import {LatLngTuple} from "leaflet";
import React from "react";
import snapToLocation from "./locationOfInterest.ts";

interface MapState {

    currentMenu: string,
    setCurrentMenu: React.Dispatch<React.SetStateAction<string>>,

    currentLayer: string,
    setCurrentLayer: React.Dispatch<React.SetStateAction<string>>,

    startingPosition: LatLngTuple,

    zoomLevel: number,
    setZoomLevel: React.Dispatch<React.SetStateAction<number>>,

    locationOfInterest: LatLngTuple | null,
    setLocationOfInterest: React.Dispatch<React.SetStateAction<LatLngTuple | null>>,

    locationsOfInterest: snapToLocation[],
    setLocationsOfInterest: React.Dispatch<React.SetStateAction<snapToLocation[]>>,
}

export default MapState;