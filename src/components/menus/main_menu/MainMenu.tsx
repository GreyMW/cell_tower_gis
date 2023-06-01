import ActiveLayer from "../menu_subitems/ActiveLayer.tsx";
import AddPoint from "../../AddPoint.tsx";
import MapStateInterface from "../../../logic/object_definitions/mapStateInterface.ts";
import "../../../stylesheets/MainMenu.css";
import Spacer from "../menu_subitems/Spacer.tsx";
import ButtonLocationsOfInterest from "./ButtonLocationsOfInterest.tsx";
import LatLonZoomViewer from "../menu_subitems/LatLonZoomViewer.tsx";

export default function MainMenu({mapState}: {mapState: MapStateInterface }) {
    return (
        <div className={"main-menu-container"}>
            <div>
                <h1>Crime Analysis GIS</h1>
                <Spacer/>
                <ButtonLocationsOfInterest mapState={mapState}/>
                <Spacer/>
                <ActiveLayer mapState={mapState}/>
                <Spacer/>
                <AddPoint/>
                <Spacer/>
            </div>
            <LatLonZoomViewer mapState={mapState}/>
        </div>
    )
}