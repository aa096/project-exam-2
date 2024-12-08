import { Helmet } from "react-helmet";
import CreateVenueForm from "../components/templates/createFormVenue";

function RentOutPage() {
  return (
    <div>
      <Helmet>
        <title>Holidaze - Rent Out Your Venue</title>
        <meta
          name="description"
          content="List your property on Holidaze and reach travelers looking for the perfect holiday venue. Rent out your venue effortlessly and manage bookings with ease."
        />
      </Helmet>
      <main className="container flex flex-wrap justify-center">
        <CreateVenueForm />
      </main>
    </div>
  );
}

export default RentOutPage;
