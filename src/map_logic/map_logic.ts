
type voidFunctionNoParam = () => void;
type voidFunctionOneParamAny = (_: any) => void;
// type voidFunctionOneParamNumber = (n: number) => void;

interface MapState {
    activeLayer: number,
    activeLayerHook: voidFunctionOneParamAny,
}
const mapState: MapState = {
    activeLayer: 0,
    //Q for Francis: how to declare an uninitialized function assignment property in TS
    //Especially whe the type that is associated to this is going to be:  React.Dispatch<React.SetStateAction<number>>
    //Related file ActiveLayer.tsx
    activeLayerHook: (_: number): void => {return},

}

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

//Usages for our setters and therefore the general functionality of the program
function setActiveLayer() {
    console.log(mapState.activeLayer);
    mapState.activeLayer += 1;
    mapState.activeLayerHook(mapState.activeLayer);
}


export default mapState;
export {hookSetters, setters};