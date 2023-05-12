import mapState from "./mapState.ts";


//Usages for our setters and therefore the general functionality of the program
function setActiveLayer() {
    console.log(mapState.activeLayer);
    mapState.activeLayer += 1;
    mapState.activeLayerHook(mapState.activeLayer);
}


export {setActiveLayer};