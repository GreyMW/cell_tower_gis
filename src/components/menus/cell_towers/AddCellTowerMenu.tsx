import MapStateInterface from "../../../logic/object_definitions/mapStateInterface.ts";
import ReturnToMain from "../menu_subitems/ReturnToMain.tsx";
import Spacer from "../menu_subitems/Spacer.tsx";
import LatLonZoomViewer from "../menu_subitems/LatLonZoomViewer.tsx";
import React, {useState} from "react";

export default function AddCellTowerMenu({mapState}:{mapState: MapStateInterface}){

    function AddTowerForm() {

        const [inputs, setInputs] = useState({
            newTowerName: "",
            newTowerLat: "",
            newTowerLon: "",
        });

        function handleSubmit() {
            return;
        }

        function handleChange() {
            //TODO
            return;
        }

        return (
            <form onSubmit={handleSubmit} className={'form-container top-margin-10px'} autoComplete={'off'}>
                <div  className={"left-right-form"}>
                    <div className={"form-labels-container"}>
                        <div>
                            <label>Tower Name: </label>
                        </div>
                        <div>
                            <label>Latitude: </label>
                        </div>
                        <div>
                            <label>Longitude: </label>
                        </div>
                        <div>
                            <label>Range (km): </label>
                        </div>
                        <div>
                            <label>Azimuth (0-360): </label>
                        </div>
                        <div>
                            <label>Beam Width (0-180): </label>
                        </div>
                    </div>
                    <div className={'form-inputs-container'}>
                        {/*name*/}
                        <div className={"input-data"}>
                            <input
                                type="text"
                                name={"newTowerName"}
                                value={inputs.newTowerName}
                                onChange={handleChange}
                                className={'faded-input'}
                            />
                            <div className={"underline"}></div>
                        </div>
                        {/*latitude*/}
                        <div className={"input-data"}>
                            <input
                                type="text"
                                name={"newTowerLat"}
                                value={inputs.newTowerLat}
                                onChange={handleChange}
                                className={'faded-input'}
                            />
                            <div className={"underline"}></div>
                        </div>
                        {/*longitude*/}
                        <div className={"input-data"}>
                            <input
                                type="text"
                                name={"newTowerLon"}
                                value={inputs.newTowerLon}
                                onChange={handleChange}
                                className={'faded-input'}
                            />
                            <div className={"underline"}></div>
                        </div>

                        <div className={"input-data"}>
                            <input
                                type="text"
                                name={"newZoom"}
                                value={inputs.newZoom}
                                onChange={handleChange}
                                className={'faded-input'}
                            />
                            <div className={"underline"}></div>
                        </div>
                    </div>
                </div>


                <div className={"side-by-side-buttons top-margin-10px"}>
                    <button className={'secondary-button half-width'} type={"button"} onClick={useCurrentView}>Use Current View</button>
                    <button className={'secondary-button half-width'} type="submit">Submit</button>
                </div>


            </form>
        )
    }


    return (
        <div className={"main-menu-container"}>
            <ReturnToMain mapState={mapState}/>
            <Spacer/>

            <LatLonZoomViewer mapState={mapState}/>

        </div>
    )
}