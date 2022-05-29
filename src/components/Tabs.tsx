import { Outlet } from "react-router-dom";
import TabNav from "./TabNav";

const Tabs = () => {
  return (
    <div className="tabs">
      <TabNav />
      <Outlet />
    </div>
  );
};

export default Tabs;
