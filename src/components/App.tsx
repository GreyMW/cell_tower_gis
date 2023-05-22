import '../stylesheets/App.css';
import Map from './Map.tsx';
import MainMenu from "./MainMenu.tsx";
import {useEffect, useState} from "react";
import {LatLngTuple} from "leaflet";
import MapState from "../logic/mapState.ts";
import defaultSetup from "../logic/defaultSetup.ts";
import snapToLocation from "../logic/snapToLocation.ts";

function App() {


    const [snapToPosition, setSnapToPosition] = useState<LatLngTuple | null>(null);
    const [snapToLocations, setSnapToLocations] = useState<snapToLocation[]>([]);

    const mapState: MapState = {
        startingPosition: [49.89296679044865, -97.13893576170027],
        zoomLevel: 13,

        snapToPosition: snapToPosition,
        setSnapToPosition: setSnapToPosition,

        snapToLocations: snapToLocations,
        setSnapToLocations: setSnapToLocations,
    }

    //sets all of our mapState to default values
    useEffect(()=> {
        defaultSetup(mapState);

    }, [])


    console.log(typeof setSnapToPosition);



    return (
        <div className={"main-container"}>
            <div className={"main-left-pane"}>
                <MainMenu mapState={mapState}/>
            </div>
            <Map mapState={mapState}/>

        </div>
    )
}

export default App;
