import { useParams } from "react-router-dom";
import useVenue from "../../hooks/useVenue";
import { getRandomLocation } from "./dummyLocation";
import BookingCalendar from "../UI/BookingCalender";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faHouseUser,
  faStar,
  faWifi,
  faUtensils,
  faDog,
  faSquareParking,
  faBan,
} from "@fortawesome/free-solid-svg-icons";

const VenuePage = () => {
  const { id } = useParams();
  const { venue, loading, error } = useVenue(id);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  if (!venue) return <div>Venue details not found.</div>;

  const { name, description, location, media, maxGuests, price, rating, meta } = venue;

  const city = location?.city || getRandomLocation();
  const country = location?.country || getRandomLocation();

  const mediaItem = media?.length > 0 ? media[0] : {};
  const imageUrl = mediaItem.url || "/assets/default.png";
  const imageAlt = mediaItem.alt || name || "Default Venue Image";

  const metaInfo = [
    { label: "WiFi", value: meta?.wifi, icon: faWifi },
    { label: "Pets", value: meta?.pets, icon: faDog },
    { label: "Breakfast", value: meta?.breakfast, icon: faUtensils },
    { label: "Parking", value: meta?.parking, icon: faSquareParking },
  ];

  return (
    <div>
      <h1 className="text-4xl font-medium text-center uppercase mt-6 mb-16">{name}</h1>
      <div className="container py-8 bg-white rounded-[20px] shadow-custom-card">
        <div className="flex flex-col justify-center items-center md:flex-row px-6 gap-7">
          <img
            src={imageUrl}
            alt={imageAlt}
            className="md:w-[400px] md:h-[500px] rounded-[20px] lg:-mt-14 lg:-ms-10 -mt-14 mx-auto object-cover object-center"
          />
          <div className="lg:max-w-lg xl:max-w-xl">
            <div className="flex gap-3 uppercase">
              <FontAwesomeIcon icon={faLocationDot} className="mt-1 text-lg" /> {city}, {country}
            </div>
            <p className="break-words line-clamp-8 mt-5">{description}</p>
            <div className="flex gap-3 mt-3">
              <FontAwesomeIcon icon={faHouseUser} className="mt-1" />
              {maxGuests} Guests
              <FontAwesomeIcon icon={faStar} className="mt-1" /> {rating}/5
            </div>
            <div>
              <h2 className="font-montserrat uppercase font-semibold text-[20px] my-4">$ {price} per night</h2>
              <hr className="border-[#A39C96] my-2"></hr>
            </div>
            <div>
              <h3 className="uppercase text-lg font-medium">Facilities & Rules</h3>
              <div>
                <ul className="grid grid-cols-2 gap-4 mt-4">
                  {metaInfo.map((item, index) => (
                    <li
                      key={index}
                      className="relative flex items-center gap-4 text-lg"
                      aria-label={`${item.label}: ${item.value ? "Available" : "Not Available"}`}>
                      <div className="relative w-8 h-8">
                        <FontAwesomeIcon icon={item.icon} className={`text-2xl ${item.value ? "" : ""}`} />
                        {!item.value && (
                          <FontAwesomeIcon
                            icon={faBan}
                            className="absolute text-[#F3676A] -inset-1 text-[33px] opacity-70"
                          />
                        )}
                      </div>
                      <span>{item.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-12">
          <h4 className="mb-4 text-lg">Book </h4>
          <BookingCalendar />
        </div>
      </div>
    </div>
  );
};

export default VenuePage;
