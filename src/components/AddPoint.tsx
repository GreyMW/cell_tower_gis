import {actions} from "../logic/mapActions.ts";


function AddPoint(){

    return (
        <div>
            <button onClick={() => actions.addPoint()}>Add Point</button>
            <button onClick={() => console.log("omg")}>Add Point</button>
        </div>
    )
}

export default AddPoint;