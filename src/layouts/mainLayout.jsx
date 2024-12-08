import { Footer, Header } from "../components";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div className="flex flex-col  justify-center min-h-screen">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default MainLayout;
