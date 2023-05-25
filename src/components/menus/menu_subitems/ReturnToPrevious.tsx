import MapStateInterface from "../../../logic/object_definitions/mapStateInterface.ts";

export default function ReturnToPrevious({mapState, previous}:{mapState: MapStateInterface, previous: number}){
    return(
        <div>
            <button onClick={() => mapState.setCurrentMenu(previous)}>{"<"}- Back </button>
        </div>
    )
}