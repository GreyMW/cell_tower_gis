import MapStateInterface from "../object_definitions/mapStateInterface.ts";
import MapLayer from "../object_definitions/mapLayer.ts";

function getCurrentLayerReference(mapState: MapStateInterface): MapLayer | undefined{
    for (const layer of mapState.layers) {
        if (layer.getLayerName() === mapState.currentLayer) {
            console.log("Current Layer Found");
            return layer;
        }
    }
}

export default getCurrentLayerReference;