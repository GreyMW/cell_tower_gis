import mapState from "./mapState.ts";
import MapMarkers from "./mapMarker.ts";
import {hooks} from "./hooks.ts";

type voidFunctionNoParam = (() => void) | undefined;


//Usages for our setters and therefore the general functionality of the program
function setActiveLayer() {
    console.log("Log:" + mapState.activeLayer);
    mapState.activeLayer += 1;
    // mapState.activeLayerHook(mapState.activeLayer);
}

function addPoint() {
    const newPoints = structuredClone(mapState.mapMarkers);
    // mapState.mapMarkers.push(new MapMarkers(49.89739007830272, -97.12794943349087));
    newPoints.push(new MapMarkers(49.9, -97.12794943349087));
    console.log("addPoint invoked");
    hooks.markersHook(newPoints);
}

interface Actions {
    setActiveLayer: voidFunctionNoParam,
    addPoint: voidFunctionNoParam
}
const actions: Actions = {
    setActiveLayer: setActiveLayer,
    addPoint: addPoint,
}

export {setActiveLayer, addPoint, actions};