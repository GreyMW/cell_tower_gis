import MenuList from "../../../logic/object_definitions/menuList.ts";
import MapStateInterface from "../../../logic/object_definitions/mapStateInterface.ts";

export default function ButtonLocationsOfInterest({mapState}: {mapState: MapStateInterface }) {
    return (
        <button className={'primary-button'} onClick={() => mapState.setCurrentMenu(MenuList.location_of_interest)}>Locations of Interest</button>
    )
}