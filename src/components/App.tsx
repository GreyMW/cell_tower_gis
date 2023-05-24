import '../stylesheets/App.css';
import Map from './Map.tsx';
import MenuSelector from "./MenuSelector.tsx";
import {useEffect, useState} from "react";
import {LatLng, LatLngTuple} from "leaflet";
import MapStateInterface from "../logic/mapStateInterface.ts";
import defaultSetup from "../logic/defaultSetup.ts";
import snapToLocation from "../logic/locationOfInterest.ts";
import MenuList from "../logic/MenuList.ts";

function App() {


    const [currentMenu, setCurrentMenu] = useState<number>(MenuList.main);
    const [currentLayer, setCurrentLayer] = useState<string>("default");
    const [zoomLevel, setZoomLevel] = useState<number>(13);
    const [mapPosition, setMapPosition] = useState<LatLng | null>(null);

    const [locationOfInterest, setLocationOfInterest] = useState<LatLngTuple | null>(null);
    const [locationsOfInterest, setLocationsOfInterest] = useState<snapToLocation[]>([]);

    const mapState: MapStateInterface = {

        currentMenu: currentMenu,
        setCurrentMenu: setCurrentMenu,

        currentLayer: currentLayer,
        setCurrentLayer: setCurrentLayer,

        startingPosition: [49.892, -97.138],

        zoomLevel: zoomLevel,
        setZoomLevel: setZoomLevel,

        mapPosition: mapPosition,
        setMapPosition: setMapPosition,

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
