import MapStateInterface from "../../../logic/object_definitions/mapStateInterface.ts";
import ReturnToPrevious from "../menu_subitems/ReturnToPrevious.tsx";
import MenuList from "../../../logic/object_definitions/menuList.ts";
import React, {useState} from "react";
import LocationOfInterest from "../../../logic/object_definitions/locationOfInterest.ts";
import Spacer from "../menu_subitems/Spacer.tsx";
import LatLonZoomViewer from "../menu_subitems/LatLonZoomViewer.tsx";
import ValidationResponse from "../../../logic/object_definitions/validationResponse.ts";
import latitudeValidation from "../../../logic/functionality/latitudeValidation.ts";
import longitudeValidation from "../../../logic/functionality/longitudeValidation.ts";
// import "../../../stylesheets/MainMenu.css";

export default function AddLocationOfInterestMenu({mapState}:{mapState: MapStateInterface}) {
    // console.log(mapState.locationsOfInterest);
    
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
                mapState.setLocationsOfInterest([...mapState.locationsOfInterest, newLocation]);
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
            <form onSubmit={handleSubmit} className={'form-container top-margin-10px'} autoComplete={'off'}>
                <div  className={"left-right-form"}>
                    <div className={"form-labels-container"}>
                        <div>
                            <label>Location Name: </label>
                        </div>
                        <div>
                            <label>Latitude: </label>
                        </div>
                        <div>
                            <label>Longitude: </label>
                        </div>
                        <div>
                            <label>Zoom (0-18): </label>
                        </div>
                    </div>
                    <div className={'form-inputs-container'}>
                        <div className={"input-data"}>
                            <input
                                type="text"
                                name={"newLocationName"}
                                value={inputs.newLocationName}
                                onChange={handleChange}
                                className={'faded-input'}
                            />
                            <div className={"underline"}></div>
                        </div>

                        <div className={"input-data"}>
                            <input
                                type="text"
                                name={"newLocationLat"}
                                value={inputs.newLocationLat}
                                onChange={handleChange}
                                className={'faded-input'}
                            />
                            <div className={"underline"}></div>
                        </div>

                        <div className={"input-data"}>
                            <input
                                type="text"
                                name={"newLocationLon"}
                                value={inputs.newLocationLon}
                                onChange={handleChange}
                                className={'faded-input'}
                            />
                            <div className={"underline"}></div>
                        </div>

                        <div className={"input-data"}>
                            <input
                                type="text"
                                name={"newZoom"}
                                value={inputs.newZoom}
                                onChange={handleChange}
                                className={'faded-input'}
                            />
                            <div className={"underline"}></div>
                        </div>
                    </div>
                </div>


                <div className={"side-by-side-buttons top-margin-10px"}>
                    <button className={'secondary-button half-width'} type={"button"} onClick={useCurrentView}>Use Current View</button>
                    <button className={'secondary-button half-width'} type="submit">Submit</button>
                </div>


            </form>
        )
    }

    return (
        <div className={"main-menu-container"}>
            <ReturnToPrevious mapState={mapState} previous={MenuList.location_of_interest}/>
            <Spacer/>
            <AddLocationForm/>
            <LatLonZoomViewer mapState={mapState}/>
        </div>
    )
}

type FormInputs = {
    newLocationName: string,
    newLocationLat: string,
    newLocationLon: string,
    newZoom: string,
}

function validateFormSubmissions(inputs: FormInputs, mapState: MapStateInterface): [boolean, LocationOfInterest] {

    const validations: ValidationResponse[] = [];
    const parsedLat = parseFloat(inputs.newLocationLat);
    const parsedLon = parseFloat(inputs.newLocationLon);
    const parsedZoom = parseFloat(inputs.newZoom);

    validations.push(nameValidation(inputs, mapState));
    validations.push(latitudeValidation(inputs.newLocationLat));
    validations.push(longitudeValidation(inputs.newLocationLon));
    validations.push(zoomValidation(inputs, parsedZoom));

    let isValid = true;
    for (const validation of validations) {
        if (!validation.isValid) {
            isValid = false;
            console.log(validation.errorMessage);
        }
        //TODO: notify user of errors outside of the console
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