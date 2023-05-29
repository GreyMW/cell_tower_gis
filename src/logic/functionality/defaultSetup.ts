import MapStateInterface from "../object_definitions/mapStateInterface.ts";
import LocationOfInterest from "../object_definitions/locationOfInterest.ts";
import {LatLng} from "leaflet";
import MapLayer from "../object_definitions/mapLayer.ts";
import MapMarker from "../object_definitions/mapMarker.ts";

function defaultSetup(mapState: MapStateInterface) {
    const startingLatLng = new LatLng(49.892, -97.138);
    mapState.setMapPosition(startingLatLng)

    const tempSnapToLocations = [...mapState.locationsOfInterest];
    tempSnapToLocations.push(new LocationOfInterest(49.886059224248356, -97.18761630115631, "Minto", 16));
    tempSnapToLocations.push(new LocationOfInterest(49.83066879797684, -97.06035324519675, "Island Lakes", 14));
    tempSnapToLocations.push(new LocationOfInterest(49.80468210813644, -97.1813903493316, "Bridge Water Forest", 13));
    mapState.setLocationsOfInterest(tempSnapToLocations);


    const tempLayers = [...mapState.layers];
    tempLayers.push(new MapLayer("testLayer"));
    mapState.setLayers(tempLayers);

    const tempMarkers = [...tempLayers[0].getMarkers()];
    tempMarkers.push(new MapMarker(49.87516815907377, -97.20024278855814));
    tempMarkers.push(new MapMarker(49.878449312403625, -97.20647916438028));
    tempMarkers.push(new MapMarker(49.87957533730544, -97.19885692726432));
    tempMarkers.push(new MapMarker(49.88246793606662, -97.20105622888276));
    mapState.layers[0].addMarkers(tempMarkers);

}


export default defaultSetup;