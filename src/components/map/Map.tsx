import {MapContainer, TileLayer} from "react-leaflet";
import "../../stylesheets/Map.css";
import "leaflet/dist/leaflet.css";
import MapStateInterface from "../../logic/object_definitions/mapStateInterface.ts";
import UpdateZoom from "./UpdateZoom.tsx";
import UpdateMapCenter from "./UpdateMapCenter.tsx";
import FlyToPosition from "./FlyToPosition.tsx";


function Map({mapState}:{mapState: MapStateInterface}) {

    //TODO: move this to it's own file


    return (
        <MapContainer center={mapState.startingPosition} zoom={mapState.zoomLevel} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <FlyToPosition mapState={mapState}/>
            <UpdateMapCenter mapState={mapState}/>
            <UpdateZoom mapState={mapState}/>
            {/*{markers.map((marker, index) => createMarker(marker, index))}*/}
        </MapContainer>

    )
}

export default Map;