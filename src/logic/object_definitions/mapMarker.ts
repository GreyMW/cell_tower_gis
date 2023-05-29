class MapMarker {
    latitude: number;
    longitude: number;
    // https://leafletjs.com/reference.html#path
    color: string;
    fillColor: string;
    fillOpacity: number;
    stroke: boolean;
    weight: number;
    opacity: number;
    constructor(latitude: number,
                longitude: number,
                color = "#579bfa",
                fillColor = "#eb4034",
                fillOpacity = 0.2,
                stroke = true,
                weight = 3,
                opacity = 1) {
        this.latitude = latitude;
        this.longitude = longitude;
        this.color = color;
        this.fillColor = fillColor;
        this.fillOpacity = fillOpacity;
        this.stroke = stroke;
        this.weight = weight;
        this.opacity = opacity;
    }
}

export default MapMarker;