import MapStateInterface from "../object_definitions/mapStateInterface.ts";
import LocationOfInterest from "../object_definitions/locationOfInterest.ts";
import {LatLng} from "leaflet";

function defaultSetup(mapState: MapStateInterface) {
    const startingLatLng = new LatLng(49.892, -97.138);
    const tempSnapToLocations = [...mapState.locationsOfInterest];
    tempSnapToLocations.push(new LocationOfInterest(49.886059224248356, -97.18761630115631, "Minto"));
    tempSnapToLocations.push(new LocationOfInterest(49.83066879797684, -97.06035324519675, "Island Lakes"));
    tempSnapToLocations.push(new LocationOfInterest(49.80468210813644, -97.1813903493316, "Bridge Water Forest"));
    mapState.setLocationsOfInterest(tempSnapToLocations);

    mapState.setMapPosition(startingLatLng)
}


export default defaultSetup;