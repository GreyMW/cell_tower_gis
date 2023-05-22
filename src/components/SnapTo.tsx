import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../stylesheets/SnapTo.css";
import MapState from "../logic/mapState.ts";
import SnapToLocation from "../logic/snapToLocation.ts";

function SnapTo({mapState}:{mapState: MapState}) {

    function CreateDropdownItem(snapTo: SnapToLocation, key: number) {
        console.log("CreateDrowdownItem invoked");
        return (
            <Dropdown.Item key={key} onClick={() => mapState.setSnapToPosition([snapTo.latitude, snapTo.longitude])}>
                {snapTo.name}
            </Dropdown.Item>
        )
    }

    return (
        <div className={'snap-to-container main-menu-subcontainer'}>
            <p className={"no-margin"}>Snap To!</p>
            <Dropdown className={'remove-padding'}>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Dropdown Button
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {/*<Dropdown.Item onClick={() => console.log("Item 1 clicked")}>Item 1</Dropdown.Item>*/}
                    {/*<Dropdown.Item onClick={() => console.log("Item 2 clicked")}>Item 2</Dropdown.Item>*/}
                    {/*<Dropdown.Item onClick={() => console.log("Item 3 clicked")}>Item 3</Dropdown.Item>*/}
                    {/*<Dropdown.Item onClick={() => mapState.setSnapToPosition([49.89297443692565, -97.13987621568994])}>Downtown Winnipeg</Dropdown.Item>*/}
                    {/*<Dropdown.Item onClick={() => mapState.setSnapToPosition([50.448506170524766, -104.6175396352775])}>Regina</Dropdown.Item>*/}
                    {/*<Dropdown.Item onClick={() => mapState.setSnapToPosition([50.90424253092824, -97.22108811382655])}>Arbourg</Dropdown.Item>*/}

                    {mapState.snapToLocations.map((loc, index) => CreateDropdownItem(loc, index))}
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )


}

export default SnapTo;