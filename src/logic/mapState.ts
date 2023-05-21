import {LatLngTuple} from "leaflet";

interface Mapstate {
    snapToPosition: LatLngTuple,
    setSnapToPosition: any,
}

export default Mapstate;