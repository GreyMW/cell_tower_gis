import MapStateInterface from "../../../logic/object_definitions/mapStateInterface.ts";
import ReturnToPrevious from "../menu_subitems/ReturnToPrevious.tsx";
import MenuList from "../../../logic/object_definitions/menuList.ts";
import React, {useState} from "react";
import LocationOfInterest from "../../../logic/object_definitions/locationOfInterest.ts";
import Spacer from "../menu_subitems/Spacer.tsx";

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

            const [isValid, newLocation] = validateFormSubmissions(inputs, mapState);

            if (isValid) {
                mapState.setLocationsOfInterest([...mapState.locationsOfInterest, newLocation])
                console.log("Submitted New Location of Interest.");
            }
        }

        function useCurrentView() {
            const newState:FormInputs = {
                ...inputs,
                newLocationLat: mapState.mapPosition?.lat.toString() ?? "",
                newLocationLon: mapState.mapPosition?.lng.toString() ?? "",
                newZoom: mapState.zoomLevel.toString(),
            }
            setInputs(newState);
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
                <div>
                    <label>Zoom (0-18): </label>
                    <input
                        type="text"
                        name={"newZoom"}
                        value={inputs.newZoom}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <button type={"button"} onClick={useCurrentView}>Use Current View</button>
                </div>

                <button type="submit">Submit</button>
            </form>
        )
    }

    return (
        <div className={"main-menu-container"}>
            <ReturnToPrevious mapState={mapState} previous={MenuList.location_of_interest}/>
            <Spacer/>
            <AddLocationForm/>
        </div>
    )
}

type FormInputs = {
    newLocationName: string,
    newLocationLat: string,
    newLocationLon: string,
    newZoom: string,
}

type ValidationResponse = {
    isValid: boolean,
    errorMessage: string,
}

function validateFormSubmissions(inputs: FormInputs, mapState: MapStateInterface): [boolean, LocationOfInterest] {

    const validations: ValidationResponse[] = [];
    const parsedLat = parseFloat(inputs.newLocationLat);
    const parsedLon = parseFloat(inputs.newLocationLat);
    const parsedZoom = parseFloat(inputs.newZoom);

    validations.push(nameValidation(inputs, mapState));
    validations.push(latitudeValidation(inputs, parsedLat));
    validations.push(longitudeValidation(inputs, parsedLon));
    validations.push(zoomValidation(inputs, parsedZoom));

    let isValid = true;
    for (const validation of validations) {
        if (!validation.isValid) {
            isValid = false;
            console.log(validation.errorMessage);
        }
        //TODO: notify user of errors outside of the console
    }

    if (!isValid) {
        return [isValid, new LocationOfInterest(parsedLat, parsedLon, inputs.newLocationName, parsedZoom)];
    }

    return [isValid, new LocationOfInterest(parsedLat, parsedLon, inputs.newLocationName, parsedZoom)];
}

function nameValidation(inputs: FormInputs, mapState: MapStateInterface): ValidationResponse {
    const response: ValidationResponse = {
        isValid: true,
        errorMessage: "",
    }
    if (inputs.newLocationName === "") {
        response.isValid = false;
        response.errorMessage = "Empty Name Field";
        return response;
    }

    for (const location of mapState.locationsOfInterest) {
        if (location.name === inputs.newLocationName) {
            response.isValid = false;
            response.errorMessage = "Name is already used";
            return response;
        }
    }
    
    return response;
}

function latitudeValidation(inputs: FormInputs, parsedLat: number): ValidationResponse {

    const response: ValidationResponse = {
        isValid: true,
        errorMessage: "",
    }

    if (inputs.newLocationLat === "") {
        response.isValid = false;
        response.errorMessage = "Invalid Latitude";
        return response;
    }

    if (Number.isNaN(parsedLat)) {
        response.isValid = false;
        response.errorMessage = "Invalid Latitude";
        return response;
    }

    if (parsedLat < -90 || parsedLat > 90) {
        response.isValid = false;
        response.errorMessage = "Invalid Latitude";
        return response;
    }

    return response;
}

function longitudeValidation(inputs: FormInputs, parsedLon: number): ValidationResponse {

    const response: ValidationResponse = {
        isValid: true,
        errorMessage: "",
    }

    if (inputs.newLocationLon === "") {
        response.isValid = false;
        response.errorMessage = "Invalid Longitude";
        return response;
    }

    if (Number.isNaN(parsedLon)) {
        response.isValid = false;
        response.errorMessage = "Invalid Longitude";
        return response;
    }

    if (parsedLon < -180 || parsedLon > 180) {
        response.isValid = false;
        response.errorMessage = "Invalid Longitude";
        return response;
    }

    return response;
}

function zoomValidation(inputs: FormInputs, parsedZoom: number): ValidationResponse {

    const response: ValidationResponse = {
        isValid: true,
        errorMessage: "",
    }

    if (inputs.newZoom === "") {
        response.isValid = false;
        response.errorMessage = "Invalid Zoom";
        return response;
    }

    if (Number.isNaN(parsedZoom)) {
        response.isValid = false;
        response.errorMessage = "Invalid Zoom";
        return response;
    }

    if (parsedZoom < 0 || parsedZoom > 18) {
        response.isValid = false;
        response.errorMessage = "Invalid Zoom";
        return response;
    }
    return response;
}