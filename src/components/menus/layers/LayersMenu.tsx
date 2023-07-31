import MapStateInterface from "../../../logic/object_definitions/mapStateInterface.ts";
import ReturnToMain from "../menu_subitems/ReturnToMain.tsx";
import Spacer from "../menu_subitems/Spacer.tsx";
import ActiveLayer from "../menu_subitems/ActiveLayer.tsx";
import LatLonZoomViewer from "../menu_subitems/LatLonZoomViewer.tsx";
import ButtonSwitchMenu from "../menu_subitems/ButtonSwitchMenu.tsx";
import menuList from "../../../logic/object_definitions/menuList.ts";

export default function LayersMenu({mapState}: {mapState: MapStateInterface}) {
    return (
        <div className={"main-menu-container"}>
            <ReturnToMain mapState={mapState}/>
            <Spacer/>
            <ActiveLayer mapState={mapState}/>
            <Spacer/>
            <ButtonSwitchMenu mapState={mapState} menu={menuList.add_delete_layer} text={"Add/Delete Layers"}/>
            <Spacer/>
            <ButtonSwitchMenu mapState={mapState} menu={menuList.layer_options} text={"Layer Options"}/>

            <Spacer/>
            <LatLonZoomViewer mapState={mapState}/>


        </div>
    )
}