import MapStateInterface from "../../../logic/object_definitions/mapStateInterface.ts";
import ReturnToMain from "../menu_subitems/ReturnToMain.tsx";
import Spacer from "../menu_subitems/Spacer.tsx";
import ActiveLayer from "../menu_subitems/ActiveLayer.tsx";
import LatLonZoomViewer from "../menu_subitems/LatLonZoomViewer.tsx";

export default function PolygonMenu({mapState}:{mapState: MapStateInterface}) {
    return (
        <div className={"main-menu-container"}>
            <ReturnToMain mapState={mapState}/>
            <Spacer/>
            <ActiveLayer mapState={mapState}/>
            <Spacer/>


            <LatLonZoomViewer mapState={mapState}/>


        </div>
    )
}