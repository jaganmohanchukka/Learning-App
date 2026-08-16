// import { Navigate } from "react-router-dom";
// import { useAuth } from "./auth";

// function ProtectedRoute({ children }){
//     const {user, loading} = useAuth();
//     if(loading){
//         return( <div>Checking Authentication</div> );
//     }
//     if(!user){
//         return (<Navigate to="/login" replace/>);
//     }
//     return Children ;
// }

// export default ProtectedRoute;

import { Navigate } from "react-router-dom";
import { useAuth } from "./auth";

function ProtectedRoute({ children }) {

    const { user, loading } = useAuth();

    if (loading) {
        return <div>Checking Authentication...</div>;
    }

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    return children;
}

export default ProtectedRoute;