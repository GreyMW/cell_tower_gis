import MapStateInterface from "../../../../logic/object_definitions/mapStateInterface.ts";
import React, {useState} from "react";
import MapLayer from "../../../../logic/object_definitions/mapLayer.ts";
import MenuList from "../../../../logic/object_definitions/menuList.ts";
import Spacer from "../../menu_subitems/Spacer.tsx";
import ReturnToPrevious from "../../menu_subitems/ReturnToPrevious.tsx";
import menuList from "../../../../logic/object_definitions/menuList.ts";
import mapStateInterface from "../../../../logic/object_definitions/mapStateInterface.ts";
import LatLonZoomViewer from "../../menu_subitems/LatLonZoomViewer.tsx";

export default function AddDeleteLayerMenu({mapState}: {mapState: MapStateInterface }) {

    //form input for adding a layer
    const [input, setInput] = useState("");

    return (
        <div className={'main-menu-container'}>
            <ReturnToPrevious mapState={mapState} previous={menuList.layer_menu}/>
            <Spacer/>
            <AddLayerForm key={"form"} input={input} mapState={mapState} setInput={setInput}/>
            <Spacer/>
            <DeleteLabel/>
            <DeleteButtons mapState={mapState}/>
            <Spacer/>
            <LatLonZoomViewer mapState={mapState}/>
        </div>
    )
}

function DeleteLabel() {
    return (
        <div className={"top-margin-10px"}>
            Delete:
        </div>
    )
}
function DeleteButtons({mapState}: {mapState: MapStateInterface }) {
    return (
        <div className={'sub-menu-container'}>
            {mapState.layers.map((layerName, index) => DeleteButton(layerName.getLayerName(), index, mapState))}
        </div>

    )
}
function DeleteButton(layerName: string, key: number, mapState: mapStateInterface) {
    return (
        <div key={key}>
            <button
                onClick={() => handleLayerDeletion(layerName, mapState)}
                className={'secondary-button'}
            >{layerName}</button>
        </div>

    )
}

function AddLayerForm({input, mapState, setInput}:{input: string, mapState: MapStateInterface, setInput: React.Dispatch<React.SetStateAction<string>>}){
    return (
        <form className={'form-container top-margin-10px'} onSubmit={(e) => handleSubmit(e, mapState, input)} autoComplete={'off'}>
            <div  className={"left-right-form"}>
                <div className={"form-labels-container"}>
                    <label className={'form-group-label'}>Layer Name: </label>
                </div>
                <div className={'form-inputs-container'}>
                    <div className={"input-data"}>
                        <input
                            type="text"
                            name={"newLocationLat"}
                            value={input}
                            onChange={(e) => handleChange(e, setInput)}
                            className={'form-group-input'}
                            // placeholder={"Name"}
                        />
                        <div className={"underline"}></div>
                    </div>
                </div>
            </div>
            <button className={'secondary-button full-width top-margin-10px'} type={"submit"}>Submit</button>
        </form>
    )
}

function handleChange(event: React.ChangeEvent<HTMLInputElement>, setInput: React.Dispatch<React.SetStateAction<string>>) {
    setInput(event.target.value);
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
        mapState.setCurrentMenu(MenuList.layer_menu);
    }
}