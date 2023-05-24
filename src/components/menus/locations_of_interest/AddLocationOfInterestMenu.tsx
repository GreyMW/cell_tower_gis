import MapStateInterface from "../../../logic/mapStateInterface.ts";
import ReturnToPrevious from "../menu_subitems/ReturnToPrevious.tsx";
import MenuList from "../../../logic/MenuList.ts";

export default function AddLocationOfInterestMenu({mapState}:{mapState: MapStateInterface}) {
    //TODO: add forms to add a location of interest

    return (
        <div>
            <ReturnToPrevious mapState={mapState} previous={MenuList.location_of_interest}/>
        </div>
    )
}