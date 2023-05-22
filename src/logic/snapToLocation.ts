class SnapToLocation {
    latitude: number;
    longitude: number;
    name: string;
    zoom: number;
    constructor(latitude: number, longitude: number, name: string, zoom = 13) {
        this.latitude = latitude;
        this.longitude = longitude;
        this.name = name;
        this.zoom = zoom;
    }
}

export default SnapToLocation;