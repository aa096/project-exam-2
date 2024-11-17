import { Footer, Header } from "../components";

function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Footer />
    </div>
  );
}

export default MainLayout;
