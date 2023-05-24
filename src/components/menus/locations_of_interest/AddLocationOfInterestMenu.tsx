import MapStateInterface from "../../../logic/mapStateInterface.ts";
import ReturnToMain from "../menu_subitems/ReturnToMain.tsx";
import ReturnToPrevious from "../menu_subitems/ReturnToPrevious.tsx";
import MenuList from "../../../logic/MenuList.ts";

export default function AddLocationOfInterestMenu({mapState}:{mapState: MapStateInterface}) {


    return (
        <div>
            <ReturnToPrevious mapState={mapState} previous={MenuList.location_of_interest}/>
            <ReturnToMain mapState={mapState}/>
        </div>
    )
}