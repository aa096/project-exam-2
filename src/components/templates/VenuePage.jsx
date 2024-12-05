import { useParams } from "react-router-dom";
import useVenue from "../../hooks/useVenue";
// import Calendar from "../UI/Calendar"; // Bruk en kalenderkomponent for booking
import { getRandomLocation } from "./dummyLocation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faHouseUser, faStar } from "@fortawesome/free-solid-svg-icons";

const VenuePage = () => {
  const { id } = useParams(); // Hent 'id' fra URL-en via useParams
  const { venue, loading, error } = useVenue(id);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  // Sjekk at venue er definert
  if (!venue) return <div>Venue details not found.</div>;

  // Venue data
  const { name, description, location, media, maxGuests, price, rating } = venue;

  // Håndtere venue.location
  const city = location?.city || getRandomLocation(); // Bruk tilfeldig plassering hvis city ikke finnes
  const country = location?.country || getRandomLocation(); // Bruk tilfeldig plassering hvis country ikke finnes

  // Håndtere venue.media
  const mediaItem = media?.length > 0 ? media[0] : {};
  const imageUrl = mediaItem.url || "/assets/default.png";
  const imageAlt = mediaItem.alt || name || "Default Venue Image";

  return (
    <div>
      <h1 className="text-4xl font-medium text-center uppercase mt-6 mb-16">{name}</h1>
      <div className="container mx-auto px-4 py-8 bg-white rounded-[20px] shadow-custom-card">
        {/* H1 with Image */}
        <div className="flex flex-row gap-7">
          <img
            src={imageUrl}
            alt={imageAlt}
            className="w-[400px] h-[500px] object-cover rounded-[20px] -mt-14 -ms-10"
          />

          <div>
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
              <h2 className="font-montserrat uppercase font-medium text-[20px] mt-4">$ {price} per night</h2>
              <hr className="border-[#A39C96] my-2"></hr>
            </div>
            <div>
              <h3 className="uppercase text-lg font-medium">Facilities & Rules</h3>
              <div></div>
            </div>
          </div>
          {/* {seller && (
            <div className="flex items-center gap-4">
                {seller.avatar && (
                <img
                    src={seller.avatar.url}
                    alt={`${seller.name}'s avatar`}
                    className="w-12 h-12 rounded-full"
                />
                )}
                <p>
                <strong>Seller:</strong> {seller.name}
                </p>
            </div>
            )} */}
        </div>
      </div>
    </div>
  );
};

export default VenuePage;
