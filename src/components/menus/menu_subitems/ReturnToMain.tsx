import MapState from "../../../logic/mapState.ts";

export default function ReturnToMain({mapState}:{mapState: MapState}){
    return(
        <div>
            <button onClick={() => mapState.setCurrentMenu("main")}>{"<"}- Return to Main</button>
        </div>
    )
}