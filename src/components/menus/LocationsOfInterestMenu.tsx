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
    return (
        <div>
            <ReturnToMain mapState={mapState}/>
            {mapState.locationsOfInterest.map((loc, index) => CreateLocationButton(loc, index))}
        </div>
    )
}