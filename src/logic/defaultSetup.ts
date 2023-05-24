import MapStateInterface from "./mapStateInterface.ts";
import LocationOfInterest from "./locationOfInterest.ts";

function defaultSetup(mapState: MapStateInterface) {
    const tempSnapToLocations = [...mapState.locationsOfInterest];
    tempSnapToLocations.push(new LocationOfInterest(49.886059224248356, -97.18761630115631, "Minto"));
    tempSnapToLocations.push(new LocationOfInterest(49.83066879797684, -97.06035324519675, "Island Lakes"));
    tempSnapToLocations.push(new LocationOfInterest(49.80468210813644, -97.1813903493316, "Bridge Water Forest"));
    mapState.setLocationsOfInterest(tempSnapToLocations);


}


export default defaultSetup;