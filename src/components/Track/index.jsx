import { TrackSideBar } from "./styles";
import TrackBackground from "../../assets/images/bg-sidebar-desktop.svg";

export default function Track () {
    return (
        <TrackSideBar>
            <img src={TrackBackground} alt="Track Background" style={{height: "100%"}}/>
        </TrackSideBar>
    );
}