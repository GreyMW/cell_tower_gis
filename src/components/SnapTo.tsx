import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../stylesheets/SnapTo.css";

function SnapTo() {

    return (
        <div className={'snap-to-container main-menu-subcontainer'}>
            <p className={"no-margin"}>Snap To!</p>
            <Dropdown className={'remove-padding'}>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Dropdown Button
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item onClick={() => console.log("Item 1 clicked")}>Item 1</Dropdown.Item>
                    <Dropdown.Item onClick={() => console.log("Item 2 clicked")}>Item 2</Dropdown.Item>
                    <Dropdown.Item onClick={() => console.log("Item 3 clicked")}>Item 3</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )


}

export default SnapTo;