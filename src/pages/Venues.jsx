import VenuesPage from "../components/templates/VenuesPage";
import { Helmet } from "react-helmet";

function Venues() {
  return (
    <div>
      <Helmet>
        <title>Explore Venues | Holidaze</title>
        <meta name="description" content="Discover unique venues on Holidaze. Find the perfect place to stay for your next holiday, from cozy cottages to luxurious villas." />
      </Helmet>
      <main className="container flex flex-wrap justify-center">
        <VenuesPage />
      </main>
    </div>
  );
}

export default Venues;
