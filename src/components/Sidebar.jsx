import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { InventoryContext } from "../context/InventoryContext";

function Sidebar() {
  const navigate = useNavigate();

  const { logoutUser } =
    useContext(InventoryContext);

  const handleLogout = () => {
    logoutUser();
    navigate("/");
  };

  return (
    <div className="sidebar">
      <Link to="/dashboard">Dashboard</Link>

      <Link to="/inventory">Inventory</Link>

      <Link to="/warehouse">Warehouse</Link>

      <Link to="/shipments">Shipments</Link>

      <Link to="/admin">Admin</Link>

      <button
        onClick={handleLogout}
        style={{ marginTop: "20px" }}
      >
        Logout
      </button>
    </div>
  );
}

export default Sidebar;