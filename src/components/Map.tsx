import {MapContainer, TileLayer, LayerGroup, Marker} from "react-leaflet";
import "../stylesheets/Map.css";
import "leaflet/dist/leaflet.css";
import {useState} from "react";
import mapMarker from "../logic/mapMarker.ts";
import {hookSetters} from "../logic/hooks.ts";
import MapMarker from "../logic/mapMarker.ts";

// import mapState from "../logic/logic.ts";
// import {useState} from "react";
function Map() {
    const [markers, setMarkers] = useState<mapMarker[]>([]);
    hookSetters.setMarkersHook(setMarkers);

    // const markers: L.Layer[] = [];
    // const new_marker: L.Marker<[number, number]> = L.marker([51.505, -0.09]);
    // markers.push(new_marker);


    // let [activeLayer, setActivelayer] = useState();
    function createMarker(marker: MapMarker, index: number){
        return (
            <Marker position={[marker.latitude, marker.longitude]} key={index}/>
        )
    }


    return (
        <MapContainer center={[49.9, -97.12794943349087]} zoom={13} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <LayerGroup />

            {markers.map((marker, index) => createMarker(marker, index))}

            {/*<Marker position={[51.505, -0.09]}>*/}
            {/*    <Popup>*/}
            {/*        A pretty CSS3 popup. <br /> Easily customizable.*/}
            {/*    </Popup>*/}
            {/*</Marker>*/}
        </MapContainer>
    )
}

export default Map;