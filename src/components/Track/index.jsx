import { TrackSideBar } from "./styles";
import TrackBackground from "../../assets/images/bg-sidebar-desktop.svg";
import Step from "../../design/Step";

export default function Track () {
    return (
        <TrackSideBar>
            <img src={TrackBackground} alt="Track Background"/>
            <div className="content-container">
                <Step step={1} title={'YOUR INFO'}/>
                <Step step={2} title={'SELECT PLAN'}/>
                <Step step={3} title={'ADD-ONS'}/>
                <Step step={4} title={'SUMMARY'}/>
            </div>
        </TrackSideBar>
    );
}