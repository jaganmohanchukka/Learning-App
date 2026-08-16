import { Outlet} from "react-router-dom";
import Navcoln from "./navcoln";

function AppLayout(){
    return(
        <div className="app-layout">
            <Navcoln />
            <Outlet />
        </div>
    );

}

export default AppLayout