import MapStateInterface from "../../../../logic/object_definitions/mapStateInterface.ts";
import ReturnToPrevious from "../../menu_subitems/ReturnToPrevious.tsx";
import menuList from "../../../../logic/object_definitions/menuList.ts";
import Spacer from "../../menu_subitems/Spacer.tsx";

export default function AddDeleteLayersMenu({mapState}: {mapState: MapStateInterface}) {
    return (
        <div>
            <ReturnToPrevious mapState={mapState} previous={menuList.layer_menu}/>
            <Spacer/>

        </div>
    )
}