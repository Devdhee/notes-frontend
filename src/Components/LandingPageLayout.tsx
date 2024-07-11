import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function LandingPageLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default LandingPageLayout;
