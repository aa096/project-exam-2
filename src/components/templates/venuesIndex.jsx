import { useState } from "react";
import VenueCard from "./VenueCard";
import PaginationButtons from "../UI/PaginationButtons";
import useVenues from "../../hooks/useVenues"; // Importer useVenues hooken

const VenuesIndex = () => {
  const { venues, loading, error } = useVenues(); // Bruk hooken til å hente venues
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4; // Antall elementer per side

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const currentItems = venues.slice(currentIndex, currentIndex + itemsPerPage);

  const nextVenue = () => {
    if (currentIndex + itemsPerPage < venues.length) {
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
          totalItems={venues.length}
        />
      </div>
    </section>
  );
};

export default VenuesIndex;
