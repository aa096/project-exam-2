import { useState } from "react";
import VenueCard from "./VenueCard";
import PaginationButtons from "../UI/PaginationButtons";
import { getRandomLocation } from "./dummyLocation";
import useVenues from "../../hooks/useVenues"; // Importer useVenues hooken

const VenuesIndex = () => {
  const { venues, loading, error } = useVenues(); // Bruk hooken til å hente venues
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // Legg til dummy-lokasjon for hvert venue
  const formattedVenues = venues.map((venue) => ({
    ...venue,
    location: {
      ...venue.location,
      country: venue.location?.country || getRandomLocation(),
    },
  }));

  const currentItems = formattedVenues.slice(currentIndex, currentIndex + itemsPerPage);

  const nextVenue = () => {
    if (currentIndex + itemsPerPage < formattedVenues.length) {
      setCurrentIndex(currentIndex + itemsPerPage);
    }
  };

  const prevVenue = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - itemsPerPage);
    }
  };

  return (
    <section>
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold uppercase mb-6 text-center">Explore Venues</h2>
        <div className="flex justify-center flex-wrap gap-3">
          {currentItems.map((venue) => (
            <VenueCard key={venue.id} venue={venue} />
          ))}
        </div>
        <PaginationButtons
          prevVenue={prevVenue}
          nextVenue={nextVenue}
          currentIndex={currentIndex}
          itemsPerPage={itemsPerPage}
          totalItems={formattedVenues.length}
        />
      </div>
    </section>
  );
};

export default VenuesIndex;
