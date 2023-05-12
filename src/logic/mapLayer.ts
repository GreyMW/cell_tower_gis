import MapTowers from "./mapTowers.ts";
import MapMarkers from "./mapMarkers.ts";

class MapLayer {
    private layerName: string;
    private markers: MapMarkers[];
    private towers: MapTowers[];
    private visibility: boolean;
    constructor(name: string) {
        this.layerName = name;
        this.markers = [];
        this.towers = [];
        this.visibility = true;
    }

    //setters and adders
    public addMarker(marker: MapMarkers) {
        //TODO: add validation
        this.markers.push(marker);
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

    //getters
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
}

export default MapLayer;