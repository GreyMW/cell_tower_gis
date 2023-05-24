import MapStateInterface from "../../../logic/mapStateInterface.ts";

export default function ReturnToPrevious({mapState, previous}:{mapState: MapStateInterface, previous: number}){
    return(
        <div>
            <button onClick={() => mapState.setCurrentMenu(previous)}>{"<"}- Back </button>
        </div>
    )
}