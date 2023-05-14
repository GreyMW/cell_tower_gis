import MapLayer from "./mapLayer.ts";
import MapMarker from "./mapMarker.ts";

// type voidFunctionOneParamAny = (_: any) => void;
interface MapState {
    activeLayer: number,
    mapLayers: MapLayer,
    mapMarkers: MapMarker[],
}

const mapState: MapState = {
    activeLayer: 0,
    mapLayers: new MapLayer("Default"),
    //Q for Francis: how to declare an uninitialized function assignment property in TS
    //Especially whe the type that is associated to this is going to be:  React.Dispatch<React.SetStateAction<number>>
    //Related file ActiveLayer.tsx
    mapMarkers: [],
}

export default mapState;