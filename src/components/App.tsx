import '../stylesheets/App.css';
import Map from './Map.tsx';
import MainMenu from "./MainMenu.tsx";
import {useState} from "react";
import {LatLngTuple} from "leaflet";
import MapState from "../logic/mapState.ts";

function App() {

    const [snapToPosition, setSnapToPosition] = useState<LatLngTuple>([0,0]);

    const mapState: MapState = {
        snapToPosition: snapToPosition,
        setSnapToPosition: setSnapToPosition,
    }

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
