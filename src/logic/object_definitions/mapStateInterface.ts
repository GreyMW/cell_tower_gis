import {LatLng, LatLngTuple} from "leaflet";
import React from "react";
import LocationOfInterest from "./locationOfInterest.ts";
import MapLayer from "./mapLayer.ts";


interface MapStateInterface {

    currentMenu: number,
    setCurrentMenu: React.Dispatch<React.SetStateAction<number>>,

    currentLayer: string,
    setCurrentLayer: React.Dispatch<React.SetStateAction<string>>,

    layers: MapLayer[],
    setLayers: React.Dispatch<React.SetStateAction<MapLayer[]>>,

    startingPosition: LatLngTuple,

    zoomLevel: number,
    setZoomLevel: React.Dispatch<React.SetStateAction<number>>,

    mapPosition: LatLng | null,
    setMapPosition: React.Dispatch<React.SetStateAction<LatLng | null>> ,

    locationOfInterest: LocationOfInterest | null,
    setLocationOfInterest: React.Dispatch<React.SetStateAction<LocationOfInterest | null>>,

    locationsOfInterest: LocationOfInterest[],
    setLocationsOfInterest: React.Dispatch<React.SetStateAction<LocationOfInterest[]>>,

    forceRerender: boolean,
    setForceRerender: React.Dispatch<React.SetStateAction<boolean>>,
}

export default MapStateInterface;
