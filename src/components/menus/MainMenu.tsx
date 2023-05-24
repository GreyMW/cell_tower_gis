import ActiveLayer from "../ActiveLayer.tsx";
import AddPoint from "../AddPoint.tsx";
import MapStateInterface from "../../logic/mapStateInterface.ts";
import MenuList from "../../logic/MenuList.ts";

export default function MainMenu({mapState}: {mapState: MapStateInterface }) {
    return (
        <div>
            <p>Main Menu</p>
            <button onClick={() => mapState.setCurrentMenu(MenuList.location_of_interest)}>Go to Snap Menu</button>
            <ActiveLayer/>
            <AddPoint/>
        </div>
    )
}