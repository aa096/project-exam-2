import { Helmet } from "react-helmet";
import { useState } from "react";
import { TopBanner } from "../components/templates";
import { VenuesIndex } from "../components/templates";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

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
        <TopBanner onSearch={handleSearch} />
        <VenuesIndex searchQuery={searchQuery} />
      </main>
    </div>
  );
}

export default App;
