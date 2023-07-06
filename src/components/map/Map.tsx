import {MapContainer, TileLayer} from "react-leaflet";
import "../../stylesheets/Map.css";
import "leaflet/dist/leaflet.css";
import MapStateInterface from "../../logic/object_definitions/mapStateInterface.ts";
import UpdateZoom from "./map_functions/UpdateZoom.tsx";
import UpdateMapCenter from "./map_functions/UpdateMapCenter.tsx";
import GoToLocationOfInterest from "./map_functions/GoToLocationOfInterest.tsx";
import DisplayLayers from "./map_functions/DisplayLayers.tsx";
import {useCallback, useEffect, useState} from "react";
import {subscribe, unsubscribe} from "../../logic/functionality/customEvents.ts";

function Map({mapState}:{mapState: MapStateInterface}) {

    //forcing a component to re-render is apparently generally frowned upon
    //but it works so damn good here
    //@francis what should I have done differently?
    const [, updateState] = useState({});
    const forceMapRerender = useCallback(() => updateState({}), []);

    useEffect(() => {
        subscribe("forceMapRerender", () => {
            forceMapRerender();
        });

        return () => unsubscribe("forceMapRerender", () => {
            forceMapRerender();
        });
    }, [forceMapRerender])

    return (
        <MapContainer center={mapState.startingPosition} zoom={mapState.zoomLevel} scrollWheelZoom={true}>

            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <GoToLocationOfInterest mapState={mapState}/>
            <UpdateMapCenter mapState={mapState}/>
            <UpdateZoom mapState={mapState}/>
            <DisplayLayers mapState={mapState}/>

        </MapContainer>

    )
}


export default Map;