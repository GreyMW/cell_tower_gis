import MapTowers from "./mapTowers.ts";
import MapMarker from "./mapMarker.ts";

class MapLayer {
    private layerName: string;
    private markers: MapMarker[];
    private towers: MapTowers[];
    private visibility: boolean;

    constructor(name = "Default", markers: MapMarker[] = [], towers: MapTowers[] = [], visibility = true) {
        this.layerName = name;
        this.markers = markers;
        this.towers = towers;
        this.visibility = visibility;
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