import { Link, useLocation, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const navigation = useNavigate();

  const logout = () => {
    localStorage.removeItem("user");
    navigation("/login");
  };

  return (
    <div className="sidebar">
      <div className="sidebar__items">
        <Link
          to="/dashboard"
          className={location.pathname === "/dashboard" ? "sidebar_active" : ""}
        >
          Dashboard
        </Link>
        <Link
          to="/tabs"
          className={
            location.pathname.includes("/tabs") ? "sidebar_active" : ""
          }
        >
          Tabs
        </Link>
        <Link
          to="/settings"
          className={location.pathname === "/settings" ? "sidebar_active" : ""}
        >
          Settings
        </Link>
        <Link
          to="/login"
          className={location.pathname === "/login" ? "sidebar_active" : ""}
        >
          Login
        </Link>
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
};

export default Sidebar;
