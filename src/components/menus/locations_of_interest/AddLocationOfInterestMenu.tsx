import MapStateInterface from "../../../logic/object_definitions/mapStateInterface.ts";
import ReturnToPrevious from "../menu_subitems/ReturnToPrevious.tsx";
import MenuList from "../../../logic/object_definitions/menuList.ts";
import React, {useState} from "react";

export default function AddLocationOfInterestMenu({mapState}:{mapState: MapStateInterface}) {
    
    function AddLocationForm() {


        const [inputs, setInputs] = useState({
            newLocationName: "",
            newLocationLat: "",
            newLocationLon: "",
            newZoom: "",
        });

        function handleChange (event: React.ChangeEvent<HTMLInputElement>) {
            const name = event.target.name;
            const value = event.target.value;
            setInputs({...inputs, [name]: value});
        }

        function handleSubmit (event: React.FormEvent<HTMLFormElement>){
            event.preventDefault();

            //name validation
            if (inputs.newLocationName === "") {
                console.log("Empty Name Field")
                return;
            }

            for (const location of mapState.locationsOfInterest) {
                if (location.name === inputs.newLocationName) {
                    console.log("Name is already used");
                    return;
                }
            }

            //latlon validation
            const parsedLat = parseFloat(inputs.newLocationLat);
            const parsedLon = parseFloat(inputs.newLocationLat);

            if (Number.isNaN(parsedLat)) {
                console.log("Invalid Latitude");
                return;
            }

            if (Number.isNaN(parsedLon)) {
                console.log("Invalid Longitude");
                return;
            }

            if (parsedLat < -90 || parsedLat > 90) {
                console.log("Invalid Latitude");
                return;
            }

            if (parsedLon < -180 || parsedLon > 180) {
                console.log("Invalid Longitude");
                return;
            }

            //validate zoom level
            //TODO: VALIDATE ZOOM



            console.log("Submitted");
            //TODO: HANDLE SUBMIT

        }

        return (
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Location Name: </label>
                    <input
                        type="text"
                        name={"newLocationName"}
                        value={inputs.newLocationName}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Latitude: </label>
                    <input
                        type="text"
                        name={"newLocationLat"}
                        value={inputs.newLocationLat}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label>Longitude: </label>
                    <input
                        type="text"
                        name={"newLocationLon"}
                        value={inputs.newLocationLon}
                        onChange={handleChange}
                    />
                </div>

                <input type="submit"/>
            </form>
        )
    }

    return (
        <div>
            <ReturnToPrevious mapState={mapState} previous={MenuList.location_of_interest}/>
            <AddLocationForm/>
        </div>

    )
}