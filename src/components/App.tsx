import '../stylesheets/App.css';

import Map from './map/Map.tsx';
import MenuSelector from "./MenuSelector.tsx";
import {useEffect, useState} from "react";
import {LatLng} from "leaflet";
import MapStateInterface from "../logic/object_definitions/mapStateInterface.ts";
import defaultSetup from "../logic/functionality/defaultSetup.ts";
import MenuList from "../logic/object_definitions/menuList.ts";
import LocationOfInterest from "../logic/object_definitions/locationOfInterest.ts";
import MapLayer from "../logic/object_definitions/mapLayer.ts";

function App() {

    const [currentMenu, setCurrentMenu] = useState<number>(MenuList.main);
    const [currentLayer, setCurrentLayer] = useState<string>("default");
    const [layers, setLayers] = useState<MapLayer[]>([new MapLayer("default")]);
    const [zoomLevel, setZoomLevel] = useState<number>(13);
    const [mapPosition, setMapPosition] = useState<LatLng | null>(null);

    const [locationOfInterest, setLocationOfInterest] = useState<LocationOfInterest | null>(null);
    const [locationsOfInterest, setLocationsOfInterest] = useState<LocationOfInterest[]>([]);

    //this is a bit of a hack, basically rerenders the map upon:
    //mapState.setForceRerender(!mapState.forceRerender);
    const [forceRerender, setForceRerender] = useState(false);



    const mapState: MapStateInterface = {

        currentMenu: currentMenu,
        setCurrentMenu: setCurrentMenu,

        currentLayer: currentLayer,
        setCurrentLayer: setCurrentLayer,

        layers: layers,
        setLayers: setLayers,

        startingPosition: [49.892, -97.138],

        zoomLevel: zoomLevel,
        setZoomLevel: setZoomLevel,

        mapPosition: mapPosition,
        setMapPosition: setMapPosition,

        locationOfInterest: locationOfInterest,
        setLocationOfInterest: setLocationOfInterest,

        locationsOfInterest: locationsOfInterest,
        setLocationsOfInterest: setLocationsOfInterest,

        forceRerender: forceRerender,
        setForceRerender: setForceRerender
    }

    //sets all of our mapState to default values
    useEffect(()=> {
        defaultSetup(mapState);
    }, [])

    return (
        <div className={"main-container"}>
            <div className={"main-left-pane"}>
                <MenuSelector mapState={mapState}/>
            </div>
            <Map mapState={mapState}/>


        </div>
    )
}

export default App;
