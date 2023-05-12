import '../stylesheets/App.css';
import Map from './Map.tsx';
import MainMenu from "./MainMenu.tsx";

function App() {

    return (
        <div className={"main-container"}>
            <div className={"main-left-pane"}>
                <MainMenu/>
            </div>
            <div className={"main-right-pane"}>
                <Map/>

            </div>
        </div>
    )
}

export default App;
