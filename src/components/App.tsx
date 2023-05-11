import '../stylesheets/App.css';
import Map from './Map.tsx';

function App() {

    return (
        <div className={"main-container"}>
            <div className={"main-left-pane"}>
                <p>hello</p>
            </div>
            <div className={"main-right-pane"}>
                <Map/>

            </div>
        </div>
    )
}

export default App;
