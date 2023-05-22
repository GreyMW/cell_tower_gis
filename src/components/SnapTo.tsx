import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../stylesheets/SnapTo.css";
import MapState from "../logic/mapState.ts";
import SnapToLocation from "../logic/snapToLocation.ts";

function SnapTo({mapState}:{mapState: MapState}) {

    function CreateDropdownItem(snapTo: SnapToLocation, key: number) {
        return (
            <Dropdown.Item key={key} onClick={() => mapState.setSnapToPosition([snapTo.latitude, snapTo.longitude])}>
                {snapTo.name}
            </Dropdown.Item>
        )
    }

    function addSnapToLocation(){
        console.log("addSnapToLocation");
    }

    return (
        <div className={'snap-to-container main-menu-subcontainer'}>
            <p className={"no-margin"}>Snap To!</p>
            <Dropdown className={'remove-padding'}>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Dropdown Button
                </Dropdown.Toggle>

                <Dropdown.Menu>

                    {mapState.snapToLocations.map((loc, index) => CreateDropdownItem(loc, index))}
                    <Dropdown.Item onClick={() => addSnapToLocation()}>Add Location</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

        </div>
    )


}

export default SnapTo;