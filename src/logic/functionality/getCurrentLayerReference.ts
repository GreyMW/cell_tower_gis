import MapStateInterface from "../object_definitions/mapStateInterface.ts";
import MapLayer from "../object_definitions/mapLayer.ts";

function getCurrentLayerReference(mapState: MapStateInterface): MapLayer{
    for (const layer of mapState.layers) {
        if (layer.getLayerName() === mapState.currentLayer) {
            // console.log("Current Layer Found");
            return layer;
        }
    }

    //this line of code should be unreachable but is needed to satisfy Typescript
    console.log("If you see this message you messed up, see getCurrentLayerReference.ts");
    return new MapLayer();
}

export default getCurrentLayerReference;