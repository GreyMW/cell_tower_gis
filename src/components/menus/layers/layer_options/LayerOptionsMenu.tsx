import ReturnToPrevious from "../../menu_subitems/ReturnToPrevious.tsx";
import MapStateInterface from "../../../../logic/object_definitions/mapStateInterface.ts";
import menuList from "../../../../logic/object_definitions/menuList.ts";
import Spacer from "../../menu_subitems/Spacer.tsx";
import ActiveLayer from "../../menu_subitems/ActiveLayer.tsx";
import {BlockPicker, ChromePicker, ColorResult, HuePicker, SliderPicker, TwitterPicker} from 'react-color';
import React, {useEffect, useState} from "react";
import getCurrentLayerReference from "../../../../logic/functionality/getCurrentLayerReference.ts";

export default function LayerOptionsMenu({mapState}: {mapState: MapStateInterface}) {
    // const [colorPickerColor, setColorPickerColor] = useState("#FFF");
    const [colorPickerColor, setColorPickerColor] = useState(getCurrentLayerReference(mapState).getColor());

    // useEffect(() => {
    //     setColorPickerColor(getCurrentLayerReference(mapState).getColor())
    // },[]);

    return (
        <div className={'main-menu-container'}>
            <ReturnToPrevious mapState={mapState} previous={menuList.layer_menu}/>
            <Spacer/>
            <ActiveLayer mapState={mapState}/>
            <Spacer/>
            {/*<HuePicker color={colorPickerColor} onChange={(color) => setLayerColor2(color, setColorPickerColor)}/>*/}
            {/*<HuePicker color={getCurrentLayerReference(mapState).getColor()} */}
            <HuePicker color={colorPickerColor}
                       // onChange={(color) => setColorPickerColor(color.hex)}
                       onChange={(color) => setLayerColor(setColorPickerColor, color, mapState)}
            />
        </div>
    )
}

// const setLayerColor = (color: ColorResult,
//                        setColorPickerColor: React.Dispatch<React.SetStateAction<string>>,
//                        mapState: MapStateInterface) => {
//     setColorPickerColor(color.hex);
//     const currentLayer = getCurrentLayerReference(mapState);
//     currentLayer.setColor(color.hex);
//     currentLayer.setChildColor(color.hex);
// }

function setLayerColor(setColorPickerColor: React.Dispatch<React.SetStateAction<string>>, color: ColorResult, mapState: MapStateInterface) {
    setColorPickerColor(color.hex);
    const currentLayer = getCurrentLayerReference(mapState);
    currentLayer.setColor(color.hex);
    currentLayer.setChildColor(color.hex);
    mapState.setForceRerender(!mapState.forceRerender);
    // mapState.setLayers([...mapState.layers]);
}


// const setLayerColor2 = (color: ColorResult, setColorPickerColor: React.Dispatch<React.SetStateAction<string>> ) => {
//     setColorPickerColor(color.hex);
//     console.log("tertiary Action");
// }