class MapTowers {
    latitude: number;
    longitude: number;
    azimuth: number;
    beamWidth: number;
    range: number;
    constructor(latitude: number, longitude: number, azimuth: number, beamWidth: number, range: number) {
        //todo: add validation
        this.latitude = latitude;
        this.longitude = longitude;
        this.azimuth = azimuth;
        this.beamWidth = beamWidth;
        this.range = range;
    }
}

export default MapTowers;