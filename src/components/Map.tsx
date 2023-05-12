import {MapContainer, TileLayer, LayerGroup} from "react-leaflet";
import "../stylesheets/Map.css";
import "leaflet/dist/leaflet.css";
import * as L from "leaflet";
// import mapState from "../map_logic/map_logic.ts";
// import {useState} from "react";
function Map() {

    const markers: L.Layer[] = [];
    const new_marker: L.Marker<[number, number]> = L.marker([51.505, -0.09]);
    markers.push(new_marker);


    // let [activeLayer, setActivelayer] = useState();



    return (
        <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <LayerGroup />

            {/*<Marker position={[51.505,-0.09]}/>*/}

            {/*<Marker position={[51.505, -0.09]}>*/}
            {/*    <Popup>*/}
            {/*        A pretty CSS3 popup. <br /> Easily customizable.*/}
            {/*    </Popup>*/}
            {/*</Marker>*/}
        </MapContainer>
    )
}

export default Map;