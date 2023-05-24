import MapStateInterface from "../../../logic/mapStateInterface.ts";
import MenuList from "../../../logic/MenuList.ts";

export default function ReturnToMain({mapState}:{mapState: MapStateInterface}){
    return(
        <div>
            <button onClick={() => mapState.setCurrentMenu(MenuList.main)}>{"<"}- Return to Main</button>
        </div>
    )
}