import MapTowers from "./mapTowers.ts";
import MapMarker from "./mapMarker.ts";

class MapLayer {
    private layerName: string;
    private markers: MapMarker[];
    private towers: MapTowers[];
    private visibility: boolean;
    private color: string;
    private fillColor: string;
    private fillOpacity: number;
    private stroke: boolean;
    private weight: number;
    private opacity: number;

    constructor(name = "Default",
                markers: MapMarker[] = [],
                towers: MapTowers[] = [],
                visibility = true,
                color = "#579bfa",
                fillColor = "#579bfa",
                fillOpacity = 0.2,
                stroke = true,
                weight = 3,
                opacity = 1) {
        this.layerName = name;
        this.markers = markers;
        this.towers = towers;
        this.visibility = visibility;
        this.color = color;
        this.fillColor = fillColor;
        this.fillOpacity = fillOpacity;
        this.stroke = stroke;
        this.weight = weight;
        this.opacity = opacity;
    }



    //***************** setters and adders **********************
    public addMarker(marker: MapMarker) {
        //TODO: add validation
        // this.markers = [...this.markers, marker];
        this.markers.push(marker);
    }
    
    public addMarkers(markers: MapMarker[]){
        for (const marker of markers) {
            this.addMarker(marker);
        }
    }

    public addTower(tower: MapTowers) {
        //TODO: add validation
        this.towers.push(tower);
    }

    public setLayerName(name: string) {
        //TODO: add validation
        this.layerName = name;
    }

    public setVisibility(visible: boolean) {
        this.visibility = visible;
    }

    public setColor(color: string) {
        this.color = color;
    }

    public setFillColor(color: string) {
        this.fillColor = color;
    }

    public setFillOpacity(percent: number) {
        this.fillOpacity = percent;
    }

    public setStroke(hasStrokeOutline: boolean) {
        this.stroke = hasStrokeOutline;
    }

    public setWeight(strokeWeight: number) {
        this.weight = strokeWeight;
    }

    public setOpacity(percent: number) {
        this.opacity = percent;
    }
    
    public setChildColor(color: string) {
        for (const marker of this.markers) {
            marker.color = color;
        }
    }

    public setChildFillColor(color: string) {
        for (const marker of this.markers) {
            marker.fillColor = color;
        }
    }

    public setChildOpacity(opacity: number) {
        for (const marker of this.markers) {
            marker.opacity = opacity;
        }
    }

    public setChildFillOpacity(opacity: number) {
        for (const marker of this.markers) {
            marker.fillOpacity = opacity;
        }
    }

    //******************* getters ******************************
    public getMarkers() {
        return this.markers;
    }

    public getTowers() {
        return this.towers;
    }

    public getLayerName() {
        return this.layerName;
    }

    public getVisibility() {
        return this.visibility;
    }

    public getColor(): string {
        return this.color;
    }

    public getFillColor() {
        return this.fillColor;
    }

    public getFillOpacity() {
        return this.fillOpacity;
    }

    public getStroke() {
        return this.stroke;
    }

    public getWeight() {
        return this.weight;
    }

    public getOpacity() {
        return this.opacity;
    }
}

export default MapLayer;