import MapStateInterface from "../../../logic/object_definitions/mapStateInterface.ts";
import ReturnToMain from "../menu_subitems/ReturnToMain.tsx";
import LocationOfInterest from "../../../logic/object_definitions/locationOfInterest.ts";
import MenuList from "../../../logic/object_definitions/menuList.ts";
import Spacer from "../menu_subitems/Spacer.tsx";

export default function LocationsOfInterestMenu({mapState}:{mapState: MapStateInterface}) {
    function CreateLocationButton(location: LocationOfInterest, key: number){
        return (
            <div key={key}>
                <button className={'secondary-button'} onClick={() => {
                    mapState.setLocationOfInterest(location);
                }}>
                    {location.name}</button>
            </div>
        )
    }
    function AddLocationOfInterest({mapState}:{mapState: MapStateInterface}) {
        return (
            <div>
                <button className={'primary-button'} onClick={() => mapState.setCurrentMenu(MenuList.add_location_of_interest)}>Add Location of Interest</button>
            </div>
        )
    }

    return (
        <div>
            <ReturnToMain mapState={mapState}/>
            <Spacer/>

            {mapState.locationsOfInterest.map((loc, index) => CreateLocationButton(loc, index))}
            <Spacer/>
            <AddLocationOfInterest mapState={mapState}/>
        </div>
    )
}