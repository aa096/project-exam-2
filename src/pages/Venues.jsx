import VenuesPage from "../components/templates/VenuesPage";
import { Helmet } from "react-helmet";

function Venues() {
  return (
    <div>
      <Helmet>
        <title>Holidaze - </title>
        <meta name="description" content="" />
      </Helmet>
      <main className="container flex flex-wrap justify-center">
        <VenuesPage />
      </main>
    </div>
  );
}

export default Venues;
