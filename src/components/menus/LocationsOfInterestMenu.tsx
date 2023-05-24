import MapState from "../../logic/mapState.ts";
import ReturnToMain from "./menu_subitems/ReturnToMain.tsx";
import LocationOfInterest from "../../logic/locationOfInterest.ts";

export default function LocationsOfInterestMenu({mapState}:{mapState: MapState}) {

    function CreateLocationButton(snapTo: LocationOfInterest, key: number){
        return (
            <div key={key}>
                <button onClick={() => mapState.setLocationOfInterest([snapTo.latitude, snapTo.longitude])}>{snapTo.name}</button>
            </div>
        )
    }
    function AddLocationOfInterest({mapState}:{mapState: MapState}) {
        return (
            <div>
                <button onClick={() => mapState.setCurrentMenu("add_location_of_interest")}>Add Location of Interest</button>
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