import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import BackgroundPattern from "../components/BackgroundPattern";

const MainLayout = () => {
  return (
    <div className="relative min-h-screen bg-bg text-text">
      {/* <Particles staticity={67} theme={theme} /> */}
      <BackgroundPattern />
      <div className="w-full flex flex-col items-center z-10">
        <Navbar />
        <main className="flex pb-base-sm max-w-screen-width flex-col mt-base px-base w-full items-center">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
