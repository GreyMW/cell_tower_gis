import {LatLng, LatLngTuple} from "leaflet";
import React from "react";
import snapToLocation from "./locationOfInterest.ts";


interface MapStateInterface {

    currentMenu: number,
    setCurrentMenu: React.Dispatch<React.SetStateAction<number>>,

    currentLayer: string,
    setCurrentLayer: React.Dispatch<React.SetStateAction<string>>,

    startingPosition: LatLngTuple,

    zoomLevel: number,
    setZoomLevel: React.Dispatch<React.SetStateAction<number>>,

    mapPosition: LatLng | null,
    setMapPosition: React.Dispatch<React.SetStateAction<LatLng | null>> ,

    locationOfInterest: LatLngTuple | null,
    setLocationOfInterest: React.Dispatch<React.SetStateAction<LatLngTuple | null>>,

    locationsOfInterest: snapToLocation[],
    setLocationsOfInterest: React.Dispatch<React.SetStateAction<snapToLocation[]>>,
}

export default MapStateInterface;
