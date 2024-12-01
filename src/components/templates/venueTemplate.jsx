import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faStar, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import venuePropTypes from "../venuePropTypes";

const VenuesTemplate = ({ venues }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;

  const formattedVenues = venues.map((venue) => ({
    ...venue,
    location: {
      ...venue.location,
      country: venue.location?.country || "Unknown",
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
        <div className="flex justify-center flex-wrap gap-6">
          <div className="flex flex-wrap justify-center gap-6">
            {currentItems.map((venue) => (
              <div
                key={venue.id}
                className="bg-white rounded-[20px] shadow-custom-card overflow-hidden px-3 pt-6 w-[290px] h-[430px] flex-shrink-0 flex flex-col">
                <img
                  src={venue.media[0]?.url}
                  alt={venue.media[0]?.alt || "Venue Image"}
                  className="object-cover object-center w-[229px] h-[238px] mx-auto"
                />
                <div className="p-4 flex-grow">
                  <div className="flex flex-wrap justify-between items-center gap-1">
                    <h4 className="text-xl font-medium uppercase break-words line-clamp-2">{venue.name}</h4>
                    <div className="flex items-center text-xs">
                      <FontAwesomeIcon icon={faStar} className={venue.rating ? "text-primary" : "text-[#BDB7B3]"} />
                      <span className="ml-1">{venue.rating} / 5</span>
                    </div>
                  </div>
                  <div className="flex text-sm text-primary mt-2">
                    <span>
                      Up to {venue.maxGuests} Guests | ${venue.price} per night
                    </span>
                  </div>
                </div>
                <div className="px-4 pb-4 flex items-center gap-2 text-[15px]">
                  <FontAwesomeIcon icon={faLocationDot} />
                  <span>{venue.location.country}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-6 gap-4">
          <button onClick={prevVenue} className="px-6 py-2 disabled:opacity-0" disabled={currentIndex === 0}>
            <FontAwesomeIcon
              icon={faChevronLeft}
              className="text-3xl hover:text-tertiary hover:scale-125 transition-all duration-200"
            />
          </button>
          <button
            onClick={nextVenue}
            className="px-6 py-2 disabled:bg-gray-300 disabled:pointer-events-none"
            disabled={currentIndex + itemsPerPage >= formattedVenues.length}>
            <FontAwesomeIcon
              icon={faChevronRight}
              className="text-3xl hover:text-tertiary hover:scale-125 transition-all duration-200"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

VenuesTemplate.propTypes = venuePropTypes;

export default VenuesTemplate;
