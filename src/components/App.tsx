import '../stylesheets/App.css';
import Map from './Map.tsx';
import MainMenu from "./MainMenu.tsx";

function App() {

    return (
        <div className={"main-container"}>
            <div className={"main-left-pane"}>
                <MainMenu/>
            </div>
            <Map/>

        </div>
    )
}

export default App;
