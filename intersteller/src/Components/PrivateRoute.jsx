import { useContext } from "react";
import { Authcontext } from "../Context/AuthContext";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
    const { user, loading } = useContext(Authcontext);
    if (loading) {
        return <div>Loading...</div>;
    }
    if (user.isAuth) {
        return children ;
    } else {
        return <Navigate to="/login" />;
    }

}

export default PrivateRoute;
