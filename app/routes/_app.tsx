import { Outlet } from "react-router";
import Sidebar from "~/components/Sidebar";
import Footer from "~/components/Footer";

export default function AppLayout() {
  return (
    <div className="is-preload flex">
      <Sidebar />
      <div id="wrapper" className="flex-1">
        <Outlet />
      </div>
    </div>
  );
}
