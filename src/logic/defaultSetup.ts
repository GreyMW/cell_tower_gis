import MapState from "./mapState.ts";
import SnapToLocation from "./snapToLocations.ts";

function defaultSetup(mapState: MapState) {
    mapState.snapToLocations.push(new SnapToLocation(49.886059224248356, -97.18761630115631, "Minto"));
    mapState.snapToLocations.push(new SnapToLocation(49.83066879797684, -97.06035324519675, "Island Lakes"));
    mapState.snapToLocations.push(new SnapToLocation(49.80468210813644, -97.1813903493316, "Bridge Water Forest"));

}

export default defaultSetup;