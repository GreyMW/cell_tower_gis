import MapStateInterface from "../../../logic/object_definitions/mapStateInterface.ts";


export default function ButtonSwitchMenu({mapState, menu, text}: {mapState: MapStateInterface, menu: number, text: string}){

    const menuSwitch = () => mapState.setCurrentMenu(menu);
    return (
        <button className={'primary-button'} onClick={menuSwitch}>{text}</button>
    )
}
