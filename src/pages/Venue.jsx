import VenuePage from "../components/templates/VenuePage";
import { Helmet } from "react-helmet";

function Venue() {
  return (
    <div>
      <Helmet>
        <title>Holidaze - </title>
        <meta name="description" content="" />
      </Helmet>
      <main className="container flex flex-wrap justify-center">
        <VenuePage />
      </main>
    </div>
  );
}

export default Venue;
