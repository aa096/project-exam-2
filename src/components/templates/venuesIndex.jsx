import { useState } from "react";
import PropTypes from "prop-types";
import VenueCard from "./VenueCard";
import PaginationButtons from "../UI/PaginationButtons";
import useVenues from "../../hooks/useVenues";
import { useNavigate } from "react-router-dom"; // Importer useNavigate

const VenuesIndex = ({ searchQuery }) => {
  const { venues, loading, error } = useVenues();
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;
  const navigate = useNavigate(); // Initialize navigate

  const filteredVenues = venues.filter((venue) => {
    const location = venue.location || {};
    const nameMatches = venue.name.toLowerCase().includes(searchQuery.toLowerCase());
    const cityMatches = location.city && location.city.toLowerCase().includes(searchQuery.toLowerCase());
    const countryMatches = location.country && location.country.toLowerCase().includes(searchQuery.toLowerCase());

    return nameMatches || cityMatches || countryMatches;
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const currentItems = filteredVenues.slice(currentIndex, currentIndex + itemsPerPage);

  const nextVenue = () => {
    if (currentIndex + itemsPerPage < filteredVenues.length) {
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
        {filteredVenues.length === 0 ? (
          <div className="text-center">
            <p>No venues match your search</p>
            <button
              onClick={() => navigate("/venues")}
              className="mt-6 bg-primary uppercase text-sm text-white py-2 px-4 rounded-full">
              View All Venues
            </button>
          </div>
        ) : (
          <>
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
              totalItems={filteredVenues.length}
            />
          </>
        )}
      </div>
    </section>
  );
};

VenuesIndex.propTypes = {
  searchQuery: PropTypes.string.isRequired,
};

export default VenuesIndex;
