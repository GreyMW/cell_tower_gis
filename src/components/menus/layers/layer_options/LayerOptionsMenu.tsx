import ReturnToPrevious from "../../menu_subitems/ReturnToPrevious.tsx";
import MapStateInterface from "../../../../logic/object_definitions/mapStateInterface.ts";
import menuList from "../../../../logic/object_definitions/menuList.ts";
import Spacer from "../../menu_subitems/Spacer.tsx";
import ActiveLayer from "../../menu_subitems/ActiveLayer.tsx";
import {ColorResult, HuePicker} from 'react-color';
import React, {useState} from "react";
import getCurrentLayerReference from "../../../../logic/functionality/getCurrentLayerReference.ts";
import {publish} from "../../../../logic/functionality/customEvents.ts";

export default function LayerOptionsMenu({mapState}: {mapState: MapStateInterface}) {
    const currentLayer = getCurrentLayerReference(mapState);
    const [color, setColor] = useState(currentLayer.getColor());
    const [fillColor, setFillColor] = useState(currentLayer.getFillColor());
    const [opacity, setOpacity] = useState(currentLayer.getOpacity() * 100);
    const [fillOpacity, setFillOpacity] = useState(currentLayer.getFillOpacity() * 100);
    const [visibility, setVisibility] = useState(currentLayer.getVisibility());
    const [weight, setWeight] = useState(currentLayer.getWeight());


    return (
        <div className={'main-menu-container'}>
            <ReturnToPrevious mapState={mapState} previous={menuList.layer_menu}/>
            <Spacer/>
            <ActiveLayer mapState={mapState}/>
            <Spacer/>

            <p className={"vertical-margin-5px user-select-none"}>Outline Color</p>
            <HuePicker color={color}
                       className={"hue-picker"}
                       width="90%"
                       height={"15px"}
                       onChange={(color) => setLayerColor(setColor, color, mapState)}
            />
            <p className={"vertical-margin-5px user-select-none"}>Outline Opacity</p>

            <input type={"range"} min={0} max={100} value={opacity} className={"slider"}
                   style={{backgroundImage: `linear-gradient(to right, #1c1f27 , ${color})`}}
                   onChange={(e) => setLayerOpacity(setOpacity, e, mapState)}
            />

            <p className={"vertical-margin-5px user-select-none"}>Fill Color</p>

            <HuePicker color={fillColor}
                       className={"hue-picker"}
                       width="90%"
                       height={"15px"}
                       onChange={(color) => setLayerFillColor(setFillColor, color, mapState)}
            />
            <p className={"vertical-margin-5px user-select-none"}>Fill Opacity</p>

            <input type={"range"} min={0} max={100} value={fillOpacity} className={"slider"}
                   style={{backgroundImage: `linear-gradient(to right, #1c1f27 , ${fillColor})`}}
                   onChange={(e) => setLayerFillOpacity(setFillOpacity, e, mapState)}
            />

            <p className={"vertical-margin-5px user-select-none"}>{`Line Weight: ${weight}`}</p>

            <input type={"range"} min={0} max={100} value={weight} className={"slider-thin bottom-margin-10px top-margin-5px"}
                   // style={{backgroundColor: `${color}`}}
                   onChange={(e) => setLayerWeight(setWeight, e, mapState)}
            />

            <Spacer/>
            {visibility ?
                <button className={"primary-button"} onClick={() => setLayerVisibility(visibility, setVisibility, mapState)}>Turn Visibility Off</button>:
                <button className={"primary-button"} onClick={() => setLayerVisibility(visibility, setVisibility, mapState)}>Turn Visibility On</button>
            }
            <Spacer/>

        </div>
    )
}

function setLayerColor(setColor: React.Dispatch<React.SetStateAction<string>>, color: ColorResult, mapState: MapStateInterface) {
    setColor(color.hex);
    const currentLayer = getCurrentLayerReference(mapState);
    currentLayer.setColor(color.hex);
    currentLayer.setChildColor(color.hex);
    publish('forceMapRerender');
}

function setLayerOpacity(setOpacity: React.Dispatch<React.SetStateAction<number>>, e: React.ChangeEvent<HTMLInputElement>, mapState: MapStateInterface) {
    const opacity = e.target.valueAsNumber;
    setOpacity(opacity);
    const currentLayer = getCurrentLayerReference(mapState);
    currentLayer.setOpacity(opacity/100);
    currentLayer.setChildOpacity(opacity/100);
    publish('forceMapRerender');
}

function setLayerFillColor(setColor: React.Dispatch<React.SetStateAction<string>>, color: ColorResult, mapState: MapStateInterface) {
    setColor(color.hex);
    const currentLayer = getCurrentLayerReference(mapState);
    currentLayer.setFillColor(color.hex);
    currentLayer.setChildFillColor(color.hex);
    publish('forceMapRerender');
}

function setLayerFillOpacity(setOpacity: React.Dispatch<React.SetStateAction<number>>, e: React.ChangeEvent<HTMLInputElement>, mapState: MapStateInterface) {
    const opacity = e.target.valueAsNumber;
    setOpacity(opacity);
    const currentLayer = getCurrentLayerReference(mapState);
    currentLayer.setFillOpacity(opacity/100);
    currentLayer.setChildFillOpacity(opacity/100);
    publish('forceMapRerender');
}

function setLayerWeight(setWeight: React.Dispatch<React.SetStateAction<number>>, e: React.ChangeEvent<HTMLInputElement>, mapState: MapStateInterface) {
    const weight = e.target.valueAsNumber;
    setWeight(weight);
    const currentLayer = getCurrentLayerReference(mapState);
    currentLayer.setWeight(weight/5);
    currentLayer.setChildWeight(weight/5);
    publish('forceMapRerender');
}
function setLayerVisibility(visibility: boolean, setVisibility: React.Dispatch<React.SetStateAction<boolean>>, mapState: MapStateInterface) {
    setVisibility(!visibility);
    const currentLayer = getCurrentLayerReference(mapState);
    currentLayer.setVisibility(!visibility);
    publish('forceMapRerender');
}
