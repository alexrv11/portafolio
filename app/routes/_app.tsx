import { Outlet } from "react-router";
import { NavBar } from "~/components/NavBar";
import Footer from "~/components/Footer";

export default function AppLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <NavBar />
      <main className="flex-1 flex flex-col">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
