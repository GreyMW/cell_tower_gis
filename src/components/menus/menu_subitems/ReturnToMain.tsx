import MapStateInterface from "../../../logic/object_definitions/mapStateInterface.ts";
import MenuList from "../../../logic/object_definitions/menuList.ts";

export default function ReturnToMain({mapState}:{mapState: MapStateInterface}){
    return(
        <div>
            <button onClick={() => mapState.setCurrentMenu(MenuList.main)}>{"<"}- Return to Main</button>
        </div>
    )
}