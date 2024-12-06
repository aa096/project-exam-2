import { useParams } from "react-router-dom";
import useVenue from "../../hooks/useVenue";
import { getRandomLocation } from "./dummyLocation";
import BookingCalendar from "../UI/BookingCalender";
import plane from "/assets/fly.png";
import VenueInfo from "./VenueInfo";
import { faWifi, faDog, faUtensils, faSquareParking } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const VenuePage = ({ setVenueName }) => {
  const { id } = useParams();
  const { venue, loading, error } = useVenue(id);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  if (!venue) return <div>Venue details not found.</div>;

  setVenueName(venue.name);

  const { name, location, media, meta, owner } = venue;
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
      <div className="container py-8 bg-white rounded-[20px] shadow-custom-card mb-16">
        <VenueInfo
          venue={venue}
          city={city}
          country={country}
          imageUrl={imageUrl}
          imageAlt={imageAlt}
          metaInfo={metaInfo}
        />
        <h4 className="text-center mt-10 text-[20px] uppercase font-medium">Book {name}</h4>
        <div className="flex justify-center">
          <BookingCalendar />
        </div>
        <div className="flex justify-center items-center mt-4">
          <img
            src={owner?.avatar?.url || "/assets/default-avatar.png"}
            alt={owner?.name || "Host Image"}
            className="w-16 h-16 rounded-full border-4 border-[#F7F4F0] object-cover"
          />
          <span className="ml-3 text-xl">{owner?.name || "Host Name"} is the host</span>
        </div>
        <img src={plane} alt="plane icon flying to destination" className="mx-auto w-[300px] my-6" />
      </div>
    </div>
  );
};

VenuePage.propTypes = {
  setVenueName: PropTypes.func.isRequired,
};

export default VenuePage;
