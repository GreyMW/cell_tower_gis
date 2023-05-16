import {addPoint, setActiveLayer} from "./mapActions.ts";

// type voidFunctionNoParam = (() => void);
type voidFunctionOneParamAny = ((_: any) => void);



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
    activeLayerHook: voidFunctionOneParamAny,
    markersHook: voidFunctionOneParamAny,
}


const hooks: Hooks = {
    /* eslint-disable @typescript-eslint/no-unused-vars */
    //these are placeholder functions to stop typescript from yelling at me
    activeLayerHook: function(_: any) {console.log("Function failed to be instantiated for activeLayerHook.")},
    markersHook: function(_: any) {console.log("Function failed to be instantiated for markersHook.")},
    /* eslint-enable @typescript-eslint/no-unused-vars */
}

//function calls for assigning all of our setters in our HookSetters
function setActiveLayerHook(hook: any) {
    hooks.activeLayerHook = hook;
}

function setMarkersHook(hook: any) {
    hooks.markersHook = hook;
}


//functions that use the hooks







export {hookSetters, actions, hooks};