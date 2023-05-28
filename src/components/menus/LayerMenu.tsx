import MapStateInterface from "../../logic/object_definitions/mapStateInterface.ts";
import ReturnToMain from "./menu_subitems/ReturnToMain.tsx";
import React, {useState} from "react";
import MapLayer from "../../logic/object_definitions/mapLayer.ts";
import MenuList from "../../logic/object_definitions/menuList.ts";

export default function LayerMenu({mapState}: {mapState: MapStateInterface }) {

    const [input, setInput] = useState("");

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setInput(event.target.value);
    }

    function DeleteButtons(layerName: string, key: number) {
        return (
            <div key={key}>
                <button onClick={() => handleLayerDeletion(layerName, mapState)}>{layerName}</button>
            </div>

        )
    }

    return (
        <div>
            <ReturnToMain mapState={mapState}/>
            <form onSubmit={(e) => handleSubmit(e, mapState, input)}>
                <label>New Layer Name: </label>
                <input
                    type="text"
                    name={"newLocationLat"}
                    value={input}
                    onChange={handleChange}
                />
                <button type={"submit"}>Submit</button>
            </form>
            <div className={"spacer"}>
                SPACER
            </div>
            <div>
                Delete:
            </div>
            {mapState.layers.map((layerName, index) => DeleteButtons(layerName.getLayerName(), index))}
        </div>
    )
}

function validateFormSubmissions(input: string, mapState: MapStateInterface): boolean {
    for (const layer of mapState.layers) {
        if (layer.getLayerName() === input) {
            //TODO: Make use aware of the error
            console.log("Already a layer with that name.");
            return false;
        }

        if (input === "") {
            //TODO: Make user aware of the error
            console.log("Must enter a name for the layer.");
            return false;
        }
    }
    return true;
}

function handleLayerDeletion(layerName: string, mapState: MapStateInterface) {

    //cannot delete all layers
    if (mapState.layers.length === 1){
        console.log("Must have at least one layer.");
        return;
    }

    const temp = mapState.layers;
    let index_of_deletion = -1;
    for (let i = 0; i < temp.length; i++) {
        if (temp[i].getLayerName() === layerName) {
            index_of_deletion = i;
        }
    }

    //handles if they are deleting the current layer
    if (layerName === mapState.currentLayer) {
        if (index_of_deletion === 0) {
            mapState.setCurrentLayer(mapState.layers[1].getLayerName());
        } else {
            mapState.setCurrentLayer(mapState.layers[0].getLayerName());
        }
    }

    temp.splice(index_of_deletion, 1);
    mapState.setLayers([...temp]);
    //TODO: add confirmation menu
}

function handleSubmit(event: React.FormEvent<HTMLFormElement>, mapState: MapStateInterface, input: string) {
    event.preventDefault();
    const isValid = validateFormSubmissions(input, mapState);

    if (isValid) {
        mapState.setLayers([...mapState.layers, new MapLayer(input)]);

        mapState.setCurrentLayer(input);
        mapState.setCurrentMenu(MenuList.main);
    }
}