import mapState from "./mapState.ts";
import {setActiveLayer} from "./map_logic.ts";

type voidFunctionNoParam = () => void;
type voidFunctionOneParamAny = (_: any) => void;

//all the hooks from the program end up assigned here
interface HookSetters {
    setActiveLayerHook: voidFunctionOneParamAny,
}
const hookSetters: HookSetters = {
    setActiveLayerHook: setActiveLayerHook,
}

//we can control any aspect of our program from the setters object
interface Setters {
    setActiveLayer: voidFunctionNoParam,
}
const setters: Setters = {
    setActiveLayer: setActiveLayer,
}

//function calls for assigning all of our setters in our HookSetters
function setActiveLayerHook(hook: any) {
    mapState.activeLayerHook = hook;
}

export {hookSetters, setters};