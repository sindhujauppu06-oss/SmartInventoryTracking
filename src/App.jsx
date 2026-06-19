import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Inventory from "./pages/Inventory";
import Warehouse from "./pages/Warehouse";
import Shipments from "./pages/Shipments";
import Admin from "./pages/Admin";

function AppLayout() {
  const location = useLocation();

  const authPages =
    location.pathname === "/" ||
    location.pathname === "/signup";

  if (authPages) {
    return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    );
  }

  return (
    <>
      <Navbar />

      <div className="layout">
        <Sidebar />

        <div className="content">
          <Routes>
            <Route
              path="/dashboard"
              element={<Dashboard />}
            />

            <Route
              path="/inventory"
              element={<Inventory />}
            />

            <Route
              path="/warehouse"
              element={<Warehouse />}
            />

            <Route
              path="/shipments"
              element={<Shipments />}
            />

            <Route
              path="/admin"
              element={<Admin />}
            />
          </Routes>
        </div>
      </div>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}

export default App;