import MapTowers from "./mapTowers.ts";
import MapMarker from "./mapMarker.ts";

class MapLayer {
    private layerName: string;
    private markers: MapMarker[];
    private towers: MapTowers[];
    private visibility: boolean;

    constructor(name = "Default") {
        this.layerName = name;
        this.markers = [new MapMarker(49.89827468722066, -97.15387030160991),
            new MapMarker(49.88948316588984, -97.10228605743923),
            new MapMarker(49.90518513611043, -97.11970968733384)];
        this.towers = [];
        this.visibility = true;
    }



    //setters and adders
    public addMarker(marker: MapMarker) {
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