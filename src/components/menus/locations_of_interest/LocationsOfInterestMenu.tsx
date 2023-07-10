import MapStateInterface from "../../../logic/object_definitions/mapStateInterface.ts";
import ReturnToMain from "../menu_subitems/ReturnToMain.tsx";
import LocationOfInterest from "../../../logic/object_definitions/locationOfInterest.ts";
import MenuList from "../../../logic/object_definitions/menuList.ts";
import Spacer from "../menu_subitems/Spacer.tsx";
import LatLonZoomViewer from "../menu_subitems/LatLonZoomViewer.tsx";
import ButtonSwitchMenu from "../menu_subitems/ButtonSwitchMenu.tsx";

export default function LocationsOfInterestMenu({mapState}: { mapState: MapStateInterface }) {

    return (
        <div className={"main-menu-container"}>
            <ReturnToMain mapState={mapState}/>
            <Spacer/>
            {mapState.locationsOfInterest.map((loc, index) => CreateLocationButton(loc, index, mapState))}
            <Spacer/>
            <ButtonSwitchMenu mapState={mapState} menu={MenuList.add_location_of_interest} text={"Add Location of Interest"}/>
            <Spacer/>
            <LatLonZoomViewer mapState={mapState}/>
        </div>
    )
}

function CreateLocationButton(location: LocationOfInterest, key: number, mapState: MapStateInterface) {

    return (
        <button key={key} className={'secondary-button'} onClick={
            () => {
                mapState.setLocationOfInterest(location);
            }}
        >
            {location.name}
        </button>
    )
}