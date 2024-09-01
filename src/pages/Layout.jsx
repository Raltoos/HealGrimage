import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const Layout = () => (
  <div className="flex flex-col min-h-screen bg-white text-white font-mono">
    <Header />
    <main className="flex-grow h-full">
      <Outlet />
    </main>
  </div>
);

export default Layout;
