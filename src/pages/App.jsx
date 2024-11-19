import { Helmet } from "react-helmet";
import { TopBanner } from "../components/templates";

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
      <main>
        <TopBanner />
      </main>
    </div>
  );
}

export default App;
