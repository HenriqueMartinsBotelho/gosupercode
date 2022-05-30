import { Outlet } from "react-router-dom";
import TabNav from "./TabNav";

const Tabs = ({ props: any }) => {
  return (
    <div className="tabs">
      <TabNav />
      <Outlet />
    </div>
  );
};

export default Tabs;
