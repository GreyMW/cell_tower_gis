import '../stylesheets/App.css';
import Map from './Map.tsx';
import MenuSelector from "./MenuSelector.tsx";
import {useEffect, useState} from "react";
import {LatLngTuple} from "leaflet";
import MapState from "../logic/mapState.ts";
import defaultSetup from "../logic/defaultSetup.ts";
import snapToLocation from "../logic/locationOfInterest.ts";
import MenuList from "../logic/MenuList.ts";

function App() {

    const [currentMenu, setCurrentMenu] = useState<number>(MenuList.main);
    const [currentLayer, setCurrentLayer] = useState<string>("default");
    const [zoomLevel, setZoomLevel] = useState<number>(13);
    const [locationOfInterest, setLocationOfInterest] = useState<LatLngTuple | null>(null);
    const [locationsOfInterest, setLocationsOfInterest] = useState<snapToLocation[]>([]);

    const mapState: MapState = {

        currentMenu: currentMenu,
        setCurrentMenu: setCurrentMenu,

        currentLayer: currentLayer,
        setCurrentLayer: setCurrentLayer,

        startingPosition: [49.892, -97.138],

        zoomLevel: zoomLevel,
        setZoomLevel: setZoomLevel,

        locationOfInterest: locationOfInterest,
        setLocationOfInterest: setLocationOfInterest,

        locationsOfInterest: locationsOfInterest,
        setLocationsOfInterest: setLocationsOfInterest,
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
