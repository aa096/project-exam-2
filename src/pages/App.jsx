import { Helmet } from "react-helmet";
import { TopBanner } from "../components/templates";
import FetchVenues from "../venues/fetchVenues";

function App() {
  return (
    <div>
      <Helmet>
        <title>Holidaze - Your One-Stop Online Shop</title>
        <meta
          name="description"
          content="Discover a wide selection of products at AnyCart. Shop the latest trends in fashion, electronics, home goods, and more. Enjoy fast shipping and exceptional customer service. Start shopping today!"
        />
      </Helmet>
      <main className="container flex flex-wrap justify-center">
        <TopBanner />
        <FetchVenues />
      </main>
    </div>
  );
}

export default App;
