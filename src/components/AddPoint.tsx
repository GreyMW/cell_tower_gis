import {addPoint} from "../logic/map_logic.ts";


function AddPoint(){

    return (
        <div>
            <button onClick={() => addPoint}>Add Point</button>
        </div>
    )
}

export default AddPoint;