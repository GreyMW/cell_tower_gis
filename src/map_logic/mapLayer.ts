import MapTowers from "./mapTowers.ts";
import MapMarkers from "./mapMarkers.ts";

class MapLayer {
    private layerName: string;
    private markers: MapMarkers[];
    private towers: MapTowers[];
    constructor(name: string) {
        this.layerName = name;
        this.markers = [];
        this.towers = [];
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
}

export default MapLayer;