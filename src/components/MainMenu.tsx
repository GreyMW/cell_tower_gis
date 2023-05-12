import "../stylesheets/MainMenu.css";
import ActiveLayer from "./ActiveLayer.tsx";
// import mapState from "../map_logic/map_logic.ts";
function MainMenu(){


    return (
        <div className={'main-menu-container'}>
            <p>Main Menu</p>
            <ActiveLayer/>
        </div>
    )
}

export default MainMenu;