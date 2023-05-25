import MapStateInterface from "../object_definitions/mapStateInterface.ts";
import LocationOfInterest from "../object_definitions/locationOfInterest.ts";
import {LatLng} from "leaflet";

function defaultSetup(mapState: MapStateInterface) {
    const startingLatLng = new LatLng(49.892, -97.138);
    const tempSnapToLocations = [...mapState.locationsOfInterest];
    tempSnapToLocations.push(new LocationOfInterest(49.886059224248356, -97.18761630115631, "Minto", 16));
    tempSnapToLocations.push(new LocationOfInterest(49.83066879797684, -97.06035324519675, "Island Lakes", 14));
    tempSnapToLocations.push(new LocationOfInterest(49.80468210813644, -97.1813903493316, "Bridge Water Forest", 13));
    mapState.setLocationsOfInterest(tempSnapToLocations);

    mapState.setMapPosition(startingLatLng)
}


export default defaultSetup;