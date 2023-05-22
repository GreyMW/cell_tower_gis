import MapState from "./mapState.ts";
import SnapToLocation from "./snapToLocation.ts";

function defaultSetup(mapState: MapState) {
    const tempSnapToLocations = [...mapState.snapToLocations];
    tempSnapToLocations.push(new SnapToLocation(49.886059224248356, -97.18761630115631, "Minto"));
    tempSnapToLocations.push(new SnapToLocation(49.83066879797684, -97.06035324519675, "Island Lakes"));
    tempSnapToLocations.push(new SnapToLocation(49.80468210813644, -97.1813903493316, "Bridge Water Forest"));
    mapState.setSnapToLocations(tempSnapToLocations);


}


export default defaultSetup;