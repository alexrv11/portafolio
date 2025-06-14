import { Outlet } from "react-router";
import Sidebar from "~/components/Sidebar";
import Footer from "~/components/Footer";

export default function AppLayout() {
  return (
    <div className="is-preload">
      <Sidebar />
      <div id="wrapper">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
} 