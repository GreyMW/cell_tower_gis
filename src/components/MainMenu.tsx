import "../stylesheets/MainMenu.css";
import ActiveLayer from "./ActiveLayer.tsx";
import AddPoint from "./AddPoint.tsx";
// import mapState from "../logic/logic.ts";
function MainMenu(){


    return (
        <div className={'main-menu-container'}>
            <p>Main Menu</p>
            <ActiveLayer/>
            <AddPoint/>
        </div>
    )
}

export default MainMenu;