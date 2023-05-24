import MapStateInterface from "../../../logic/mapStateInterface.ts";
import ReturnToMain from "../menu_subitems/ReturnToMain.tsx";
import LocationOfInterest from "../../../logic/locationOfInterest.ts";
import MenuList from "../../../logic/MenuList.ts";

export default function LocationsOfInterestMenu({mapState}:{mapState: MapStateInterface}) {

    function CreateLocationButton(snapTo: LocationOfInterest, key: number){
        return (
            <div key={key}>
                <button onClick={() => mapState.setLocationOfInterest([snapTo.latitude, snapTo.longitude])}>{snapTo.name}</button>
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