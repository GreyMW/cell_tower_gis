import MapStateInterface from "../../../logic/object_definitions/mapStateInterface.ts";
import MenuList from "../../../logic/object_definitions/menuList.ts";
import {faAngleLeft} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function ReturnToMain({mapState}:{mapState: MapStateInterface}){
    return(
        <div>
            <button className={'primary-button'} onClick={() => mapState.setCurrentMenu(MenuList.main)}><FontAwesomeIcon icon={faAngleLeft} /> Return to Main</button>
        </div>
    )
}