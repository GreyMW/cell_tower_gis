import MapStateInterface from "../../../logic/object_definitions/mapStateInterface.ts";
import ReturnToMain from "../menu_subitems/ReturnToMain.tsx";
import Spacer from "../menu_subitems/Spacer.tsx";
import LatLonZoomViewer from "../menu_subitems/LatLonZoomViewer.tsx";

export default function AddCellTowerMenu({mapState}:{mapState: MapStateInterface}){
    return (
        <div className={"main-menu-container"}>
            <ReturnToMain mapState={mapState}/>
            <Spacer/>

            <LatLonZoomViewer mapState={mapState}/>

        </div>
    )
}