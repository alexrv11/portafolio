import { Outlet } from "react-router";
import Sidebar from "~/components/Sidebar";

export default function AppLayout() {
  return (
    <div className="is-preload flex min-h-screen max-w-full">
      <Sidebar className="w-72" />
      <div id="wrapper" className="flex-1 flex flex-col md:ml-72">
        <Outlet />
      </div>
    </div>
  );
}
