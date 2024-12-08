import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faHouseUser, faStar, faBan } from "@fortawesome/free-solid-svg-icons";

const VenueInfo = ({ venue, city, country, imageUrl, imageAlt, metaInfo }) => (
  <div className="flex flex-col justify-center items-center md:flex-row px-6 gap-7">
    <img
      src={imageUrl}
      alt={imageAlt}
      className="md:w-[400px] md:h-[500px] rounded-[20px] lg:-mt-14 lg:-ms-10 -mt-14 mx-auto object-cover object-center"
    />
    <div className="lg:max-w-lg xl:max-w-xl">
      <div className="flex gap-3 uppercase md:-mt-40">
        <FontAwesomeIcon icon={faLocationDot} className="mt-1 text-lg" /> {city}, {country}
      </div>
      <p className="break-words line-clamp-8 mt-5">{venue.description}</p>
      <div className="flex gap-3 mt-3">
        <FontAwesomeIcon icon={faHouseUser} className="mt-1" />
        {venue.maxGuests} Guests
        <FontAwesomeIcon icon={faStar} className="mt-1" /> {venue.rating}/5
      </div>
      <div>
        <h2 className="font-montserrat uppercase font-semibold text-[20px] my-4">$ {venue.price} per night</h2>
        <hr className="border-[#A39C96] my-2"></hr>
      </div>

      <h3 className="uppercase text-lg font-medium mt-5">Facilities & Rules</h3>
      <ul className="grid grid-cols-2 gap-4 mt-4">
        {metaInfo.map((item, index) => (
          <li
            key={index}
            className="relative flex items-center gap-4 text-lg"
            aria-label={`${item.label}: ${item.value ? "Available" : "Not Available"}`}>
            <div className="relative w-8 h-8">
              <FontAwesomeIcon icon={item.icon} className={`text-2xl ${item.value ? "" : ""}`} />
              {!item.value && (
                <FontAwesomeIcon icon={faBan} className="absolute text-[#F3676A] -inset-1 text-[33px] opacity-70" />
              )}
            </div>
            <span>{item.label}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

VenueInfo.propTypes = {
  venue: PropTypes.shape({
    description: PropTypes.string.isRequired,
    maxGuests: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  metaInfo: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.bool.isRequired,
      icon: PropTypes.object.isRequired,
    })
  ).isRequired,
};

export default VenueInfo;
