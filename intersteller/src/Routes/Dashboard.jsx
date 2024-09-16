import { useContext } from "react";
import { Authcontext } from "../Context/AuthContext";
import ProductsTable from "../Components/ProductsTable";

function Dashboard() {
  const {user,logout}=useContext(Authcontext)
  const handlelogout=()=>{
    logout()   
  }
  console.log(user)
  return (
    <div>
      <h3>Dashboard</h3>
      <div>
        <button data-testid="logout-btn" onClick={handlelogout}>Logout</button>
        <p>
          Token:
          <b data-testid="user-token">
            {user? user.token: "No user logged in"}
          </b>
        </p>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
       <ProductsTable/>
      </div>
    </div>
  );
}

export default Dashboard;
