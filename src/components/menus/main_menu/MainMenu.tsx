import MapStateInterface from "../../../logic/object_definitions/mapStateInterface.ts";
import "../../../stylesheets/MainMenu.css";
import Spacer from "../menu_subitems/Spacer.tsx";
import ButtonLocationsOfInterest from "./ButtonLocationsOfInterest.tsx";
import LatLonZoomViewer from "../menu_subitems/LatLonZoomViewer.tsx";
import ButtonLayers from "./ButtonLayers.tsx";
import ButtonAddPoint from "./ButtonPoints.tsx";
import ButtonTowers from "./ButtonTowers.tsx";
import ButtonAddAnnotations from "./ButtonAddAnnotations.tsx";

export default function MainMenu({mapState}: {mapState: MapStateInterface }) {
    return (
        <div className={"main-menu-container"}>
            <h1>Crime Analysis GIS</h1>
            <Spacer/>
            <ButtonLocationsOfInterest mapState={mapState}/>
            <Spacer/>
            <ButtonLayers mapState={mapState}/>
            <Spacer/>
            <ButtonAddPoint/>
            <Spacer/>
            <ButtonTowers/>
            <Spacer/>
            <ButtonAddAnnotations/>
            <Spacer/>


            <LatLonZoomViewer mapState={mapState}/>

        </div>
    )
}