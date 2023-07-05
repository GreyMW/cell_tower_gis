import MapStateInterface from "../../../logic/object_definitions/mapStateInterface.ts";
import ReturnToMain from "../menu_subitems/ReturnToMain.tsx";
import Spacer from "../menu_subitems/Spacer.tsx";
import ActiveLayer from "../menu_subitems/ActiveLayer.tsx";
import React, {useState} from "react";
import ValidationResponse from "../../../logic/object_definitions/validationResponse.ts";
import latitudeValidation from "../../../logic/functionality/latitudeValidation.ts";
import longitudeValidation from "../../../logic/functionality/longitudeValidation.ts";
import getCurrentLayerReference from "../../../logic/functionality/getCurrentLayerReference.ts";
import MapMarker from "../../../logic/object_definitions/mapMarker.ts";
import LatLonZoomViewer from "../menu_subitems/LatLonZoomViewer.tsx";

export default function AddPointsMenu({mapState}:{mapState: MapStateInterface}){

    const [inputLatitude, setInputLatitude] = useState("");
    const [inputLongitude, setInputLongitude] = useState("");
    //form input for adding a layer
    const formState: FormState = {
        inputLatitude,
        setInputLatitude,
        inputLongitude,
        setInputLongitude
    }



    return(
        <div className={"main-menu-container"}>
            <ReturnToMain mapState={mapState}/>
            <Spacer/>
            <AddPointForm formState={formState} mapState={mapState}/>
            <Spacer/>
            <ActiveLayer mapState={mapState}/>
            <Spacer/>
            <LatLonZoomViewer mapState={mapState}/>
        </div>
    )
}

type FormState = {
    inputLatitude: string,
    setInputLatitude: React.Dispatch<React.SetStateAction<string>>,
    inputLongitude: string,
    setInputLongitude: React.Dispatch<React.SetStateAction<string>>,
}

function AddPointForm({mapState, formState}:{mapState: MapStateInterface, formState: FormState}){
    return (
        <form className={'form-container top-margin-10px'}
              onSubmit={(e) => handleSubmit(e, mapState, formState)} autoComplete={'off'}>
            <div  className={"left-right-form"}>
                <div className={"form-labels-container"}>
                    <label className={'form-group-label'}>Latitude: </label>
                </div>
                <div className={'form-inputs-container'}>
                    <div className={"input-data"}>
                        <input
                            type="text"
                            name={"newLocationLat"}
                            value={formState.inputLatitude}
                            onChange={(e) => formState.setInputLatitude(e.target.value)}
                            className={'form-group-input'}
                            // placeholder={"Name"}
                        />
                        <div className={"underline"}></div>
                    </div>
                </div>
            </div>
            <div  className={"left-right-form"}>
                <div className={"form-labels-container"}>
                    <label className={'form-group-label'}>Longitude: </label>
                </div>
                <div className={'form-inputs-container'}>
                    <div className={"input-data"}>
                        <input
                            type="text"
                            name={"newLocationLat"}
                            value={formState.inputLongitude}
                            onChange={(e) => formState.setInputLongitude(e.target.value)}
                            className={'form-group-input'}
                            // placeholder={"Name"}
                        />
                        <div className={"underline"}></div>
                    </div>
                </div>
            </div>
            <button className={'secondary-button full-width top-margin-10px'} type={"submit"}>Submit</button>
        </form>
    )
}

function validateFormSubmissions(formState: FormState): boolean {
    const validations: ValidationResponse[] = [];

    validations.push(latitudeValidation(formState.inputLatitude));
    validations.push(longitudeValidation(formState.inputLongitude));

    let isValid = true;
    for (const validation of validations) {
        if (!validation.isValid) {
            isValid = false;
            console.log(validation.errorMessage);
        }
        //TODO: notify user of errors outside of the console
        //TODO: this is code repetition with AddLocationOfInterest
    }
    return isValid;
}
function handleSubmit(event: React.FormEvent<HTMLFormElement>, mapState: MapStateInterface, formState: FormState) {
    event.preventDefault();
    const isValid = validateFormSubmissions(formState);

    if (isValid) {
        const currentLayer = getCurrentLayerReference(mapState);
        const parsedLat = parseFloat(formState.inputLatitude);
        const parsedLon = parseFloat(formState.inputLongitude);
        const newMapMarker = new MapMarker(parsedLat, parsedLon);
        //TODO: make the marker inherit the color scheme of the layer
        currentLayer?.addMarker(newMapMarker);
        mapState.setForceRerender(!mapState.forceRerender);
    }
}
