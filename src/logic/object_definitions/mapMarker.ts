import MapLayer from "./mapLayer.ts";

class MapMarker {
    latitude: number;
    longitude: number;
    ignoreLayerSettings: boolean;
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
                fillColor = "#579bfa",
                fillOpacity = 0.2,
                stroke = true,
                weight = 3,
                opacity = 1,
                ignoreLayerSettings = false) {
        this.latitude = latitude;
        this.longitude = longitude;
        this.ignoreLayerSettings = ignoreLayerSettings;
        this.color = color;
        this.fillColor = fillColor;
        this.fillOpacity = fillOpacity;
        this.stroke = stroke;
        this.weight = weight;
        this.opacity = opacity;
    }

    public copyParentLayerProperties(mapLayer: MapLayer){
        this.color = mapLayer.getColor();
        this.fillColor =mapLayer.getFillColor();
        this.fillOpacity = mapLayer.getFillOpacity();
        this.stroke = mapLayer.getStroke();
        this.weight = mapLayer.getWeight();
        this.opacity = mapLayer.getOpacity();

    }
}

export default MapMarker;