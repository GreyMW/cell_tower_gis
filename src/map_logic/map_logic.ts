class LeafletMap {
    private towers: Tower[];
    constructor() {
        this.towers = [];
    }

    addTower(tower: Tower){
        this.towers.push(tower);
    }

    getTowers() {
        return this.towers;
    }


}

class Tower {
    public location: number;
    constructor() {
        this.location = 3;
    }
}

const mapState = new LeafletMap();

export default mapState;