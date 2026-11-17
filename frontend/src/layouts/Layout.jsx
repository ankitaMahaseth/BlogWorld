import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Layout() {
  return (
    <div className="app-container">
      <Navbar />

      <div className="main-layout">
        <Sidebar />

        <main className="main-content">
          <Outlet />
        </main>
      </div>

      <footer className="footer">
        © 2026 BlogWorld. All rights reserved.
      </footer>
    </div>
  );
}

export default Layout;