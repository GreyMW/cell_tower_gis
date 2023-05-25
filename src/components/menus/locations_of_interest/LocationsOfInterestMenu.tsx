import MapStateInterface from "../../../logic/object_definitions/mapStateInterface.ts";
import ReturnToMain from "../menu_subitems/ReturnToMain.tsx";
import LocationOfInterest from "../../../logic/object_definitions/locationOfInterest.ts";
import MenuList from "../../../logic/object_definitions/menuList.ts";

export default function LocationsOfInterestMenu({mapState}:{mapState: MapStateInterface}) {
    function CreateLocationButton(location: LocationOfInterest, key: number){
        return (
            <div key={key}>
                <button onClick={() => {
                    // mapState.setZoomLevel(snapTo.zoom);
                    mapState.setLocationOfInterest(location);
                    console.log(location.zoom);
                    console.log(mapState.zoomLevel);

                    console.log(mapState.zoomLevel);
                }}>
                    {location.name}</button>
            </div>
        )
    }
    function AddLocationOfInterest({mapState}:{mapState: MapStateInterface}) {
        return (
            <div>
                <button onClick={() => mapState.setCurrentMenu(MenuList.add_location_of_interest)}>Add Location of Interest</button>
            </div>
        )
    }
    return (
        <div>
            <ReturnToMain mapState={mapState}/>
            <AddLocationOfInterest mapState={mapState}/>
            {mapState.locationsOfInterest.map((loc, index) => CreateLocationButton(loc, index))}
        </div>
    )
}