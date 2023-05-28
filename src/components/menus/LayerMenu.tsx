import MapStateInterface from "../../logic/object_definitions/mapStateInterface.ts";
import ReturnToMain from "./menu_subitems/ReturnToMain.tsx";
import menuList from "../../logic/object_definitions/menuList.ts";
import React, {useState} from "react";
import MapLayer from "../../logic/object_definitions/mapLayer.ts";
import MenuList from "../../logic/object_definitions/menuList.ts";

export default function LayerMenu({mapState}: {mapState: MapStateInterface }) {

    const [input, setInput] = useState("");

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setInput(event.target.value);
    }

    function LayerButtons(layerName: string, key: number) {
        return (
            <div key={key}>
                <button onClick={() => handleLayerSelection(layerName)}>{layerName}</button>
            </div>

        )
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const isValid = validateFormSubmissions(input, mapState);

        if (isValid) {
            mapState.setLayers([...mapState.layers, new MapLayer(input)]);

            mapState.setCurrentLayer(input);
            mapState.setCurrentMenu(MenuList.main);
        }
    }

    function handleLayerSelection(layerName: string) {
        mapState.setCurrentLayer(layerName);
        mapState.setCurrentMenu(menuList.main);
    }

    return (
        <div>
            <ReturnToMain mapState={mapState}/>
            <form onSubmit={handleSubmit}>
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
            {mapState.layers.map((layerName, index) => LayerButtons(layerName.getLayerName(), index))}
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