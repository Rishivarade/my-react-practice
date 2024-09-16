import { useContext } from "react";
import { Authcontext } from "./Context/AuthContext";
import AllRoutes from "./Routes/AllRoutes";
import "./styles.css";

export default function App() {
  const { auth } = useContext(Authcontext);
  return (
    <div className="App">

      <AllRoutes auth={auth}/>
    </div>
  );
}

// authentication: reqres.in
//
