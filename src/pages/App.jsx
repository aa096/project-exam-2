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
        <title>Holidaze - Book Your Dream Stay</title>
        <meta
          name="description"
          content="Discover the best holiday venues on Holidaze. Book your dream stay at the perfect location with options for every budget and preference. Start planning your next getaway now!"
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
