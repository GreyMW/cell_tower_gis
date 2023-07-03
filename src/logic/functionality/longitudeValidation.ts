import ValidationResponse from "../object_definitions/validationResponse.ts";

function longitudeValidation(rawFormInput: string): ValidationResponse {

    const parsedLon = parseFloat(rawFormInput);

    const response: ValidationResponse = {
        isValid: true,
        errorMessage: "",
    }

    if (rawFormInput === "") {
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

export default longitudeValidation;