import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faStar } from "@fortawesome/free-solid-svg-icons";

const VenueCard = ({ venue }) => (
  <div className="bg-white rounded-[20px] shadow-custom-card overflow-hidden px-3 pt-6 w-[290px] h-[430px] flex-shrink-0 flex flex-col mb-6">
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
);

VenueCard.propTypes = {
  venue: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    location: PropTypes.shape({
      country: PropTypes.string,
    }),
    maxGuests: PropTypes.number,
    price: PropTypes.number,
    rating: PropTypes.number,
    media: PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string.isRequired,
        alt: PropTypes.string,
      })
    ),
  }).isRequired,
};

export default VenueCard;
