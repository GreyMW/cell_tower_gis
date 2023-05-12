import MapLayer from "./mapLayer.ts";

type voidFunctionOneParamAny = (_: any) => void;
interface MapState {
    activeLayer: number,
    activeLayerHook: voidFunctionOneParamAny,
    mapLayers: MapLayer,
}
const mapState: MapState = {
    activeLayer: 0,
    mapLayers: new MapLayer("Default"),
    //Q for Francis: how to declare an uninitialized function assignment property in TS
    //Especially whe the type that is associated to this is going to be:  React.Dispatch<React.SetStateAction<number>>
    //Related file ActiveLayer.tsx
    activeLayerHook: (_: number): void => {return},
}

export default mapState;