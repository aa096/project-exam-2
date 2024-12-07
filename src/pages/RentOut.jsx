import { Helmet } from "react-helmet";
import CreateVenueForm from "../components/templates/createFormVenue";

function RentOutPage() {
  return (
    <div>
      <Helmet>
        <title>Holidaze - </title>
        <meta name="description" content="" />
      </Helmet>
      <main className="container flex flex-wrap justify-center">
        <CreateVenueForm />
      </main>
    </div>
  );
}

export default RentOutPage;
