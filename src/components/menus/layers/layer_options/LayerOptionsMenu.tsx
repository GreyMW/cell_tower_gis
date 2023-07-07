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
    const [colorPickerColor, setColorPickerColor] = useState(currentLayer.getColor());
    const [opacity, setOpacity] = useState(currentLayer.getOpacity() * 100);


    return (
        <div className={'main-menu-container'}>
            <ReturnToPrevious mapState={mapState} previous={menuList.layer_menu}/>
            <Spacer/>
            <ActiveLayer mapState={mapState}/>
            <Spacer/>
            <div className={"vertical-margin-5px user-select-none"}>
                Layer Color
            </div>
            <HuePicker color={colorPickerColor}
                       className={"hue-picker"}
                       width="90%"
                       onChange={(color) => setLayerColor(setColorPickerColor, color, mapState)}
            />
            <div className={"vertical-margin-5px user-select-none"}>
                Layer Opacity
            </div>
            <input type={"range"} min={0} max={100} value={opacity} className={"slider"}
                   style={{backgroundImage: `linear-gradient(to right, #1c1f27 , ${colorPickerColor})`}}
                   onChange={(e) => setLayerOpacity(setOpacity, e, mapState)}
            />
        </div>
    )
}

function setLayerColor(setColorPickerColor: React.Dispatch<React.SetStateAction<string>>, color: ColorResult, mapState: MapStateInterface) {
    setColorPickerColor(color.hex);
    const currentLayer = getCurrentLayerReference(mapState);
    currentLayer.setColor(color.hex);
    currentLayer.setChildColor(color.hex);
    publish('forceMapRerender');
}

function setLayerOpacity(setOpacity: React.Dispatch<React.SetStateAction<number>>, e: React.ChangeEvent<HTMLInputElement>, mapState: MapStateInterface) {
    const opacity = e.target.valueAsNumber;
    // console.log(opacity);
    setOpacity(opacity);
    const currentLayer = getCurrentLayerReference(mapState);
    currentLayer.setOpacity(opacity/100);
    currentLayer.setChildOpacity(opacity/100);
    publish('forceMapRerender');
}
