import {addPoint, setActiveLayer} from "./map_logic.ts";

type voidFunctionNoParam = () => void;
type voidFunctionOneParamAny = (_: any) => void;



//all the hooks for the program are assigned through here
interface HookSetters {
    setActiveLayerHook: voidFunctionOneParamAny,
    setMarkersHook: voidFunctionOneParamAny,
}
const hookSetters: HookSetters = {
    setActiveLayerHook: setActiveLayerHook,
    setMarkersHook: setMarkersHook,
}



//all the hooks for the program
interface Hooks {
    activeLayerHook: voidFunctionOneParamAny | undefined,
    markersHook: voidFunctionOneParamAny | undefined,
}

const hooks: Hooks = {
    activeLayerHook: undefined,
    markersHook: undefined,
}

//function calls for assigning all of our setters in our HookSetters
function setActiveLayerHook(hook: any) {
    hooks.activeLayerHook = hook;
}

function setMarkersHook(hook: any) {
    hooks.markersHook = hook;
}


//functions that use the hooks
interface Setters {
    setActiveLayer: voidFunctionNoParam,
    addPoint: voidFunctionNoParam
}
const setters: Setters = {
    setActiveLayer: setActiveLayer,
    addPoint: addPoint,
}






export {hookSetters, setters, hooks};