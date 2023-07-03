import ValidationResponse from "../object_definitions/validationResponse.ts";

function latitudeValidation(rawFormInput: string): ValidationResponse {

    const parsedLat = parseFloat(rawFormInput);
    const response: ValidationResponse = {
        isValid: true,
        errorMessage: "",
    }

    if (rawFormInput === "") {
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

export default latitudeValidation;