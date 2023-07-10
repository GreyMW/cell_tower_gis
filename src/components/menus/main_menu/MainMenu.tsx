import MapStateInterface from "../../../logic/object_definitions/mapStateInterface.ts";
import "../../../stylesheets/MainMenu.css";
import Spacer from "../menu_subitems/Spacer.tsx";
import LatLonZoomViewer from "../menu_subitems/LatLonZoomViewer.tsx";
import ButtonSwitchMenu from "../menu_subitems/ButtonSwitchMenu.tsx";
import menuList from "../../../logic/object_definitions/menuList.ts";

export default function MainMenu({mapState}: { mapState: MapStateInterface }) {
    return (
        <div className={"main-menu-container"}>
            <h1>Crime Analysis GIS</h1>
            <Spacer/>
            <ButtonSwitchMenu mapState={mapState} menu={menuList.location_of_interest} text={"Locations of Interest"}/>
            <Spacer/>
            <ButtonSwitchMenu mapState={mapState} menu={menuList.layer_menu} text={"Layers"}/>
            <Spacer/>
            <ButtonSwitchMenu mapState={mapState} menu={menuList.add_points} text={"Add Points"}/>
            <Spacer/>
            <ButtonSwitchMenu mapState={mapState} menu={menuList.add_cell_tower_menu} text={"Add Cell Towers"}/>
            <Spacer/>
            <ButtonSwitchMenu mapState={mapState} menu={menuList.annotation_menu} text={"Add Annotations"}/>
            <Spacer/>
            <LatLonZoomViewer mapState={mapState}/>
        </div>
    )
}