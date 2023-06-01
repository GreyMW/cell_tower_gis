import MapStateInterface from "../../../logic/object_definitions/mapStateInterface.ts";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft} from "@fortawesome/free-solid-svg-icons";

export default function ReturnToPrevious({mapState, previous}:{mapState: MapStateInterface, previous: number}){
    return(
        <button className={'primary-button'} onClick={() => mapState.setCurrentMenu(previous)}><FontAwesomeIcon icon={faAngleLeft} /> Back </button>
    )
}