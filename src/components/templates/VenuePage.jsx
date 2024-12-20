import { useParams, useNavigate } from "react-router-dom";
import useVenue from "../../hooks/useVenue";
import { deleteVenue } from "../../hooks/deleteVenue";
import { getRandomLocation } from "./dummyLocation";
import BookingCalendar from "../BookingCalender";
import plane from "/assets/fly.png";
import VenueInfo from "./VenueInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWifi, faDog, faUtensils, faSquareParking, faTrash } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import { useEffect } from "react";

const VenuePage = ({ setVenueName }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { venue, loading, error } = useVenue(id);

  const currentUser = JSON.parse(localStorage.getItem("user")); 

  useEffect(() => {
    if (venue?.name) {
      setVenueName(venue.name);
    }
  }, [venue, setVenueName]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!venue) return <div>Venue details not found.</div>;

  const { name, location, media, meta, owner, bookings } = venue;
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

  const bookedDates = bookings.map((booking) => ({
    startDate: new Date(booking.startDate),
    endDate: new Date(booking.endDate),
  }));

  const handleDelete = async () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this venue?");
    if (!confirmDelete) return;

    try {
      await deleteVenue(id); 
      setIsDeleted(true); 
      navigate("/")
    } catch (error) {
      console.error("Error deleting venue:", error);
    }
  };

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
          <BookingCalendar venueId={id} maxGuests={venue.maxGuests} bookedDates={bookedDates} />
        </div>
        <div className="flex justify-center items-center mt-4">
          <img
            src={owner?.avatar?.url || "/assets/default-avatar.png"}
            alt={owner?.name || "Host Image"}
            className="w-16 h-16 rounded-full border-4 border-[#F7F4F0] object-cover"
          />
          <span className="ml-3 text-xl">{owner?.name || "Host Name"} is the host</span>
        </div>
        {currentUser?.name === owner?.name && (
          <div className="flex justify-center mt-6 gap-4">
            <button
              className="bg-primary text-white px-4 py-2 rounded-xl hover:bg-tertiary transition"
              onClick={handleDelete}> <FontAwesomeIcon icon={faTrash} className="mr-2" />
              Delete Venue
            </button>
          </div>
        )}
        <img src={plane} alt="plane icon flying to destination" className="mx-auto w-[300px] my-6" />
      </div>
    </div>
  );
};

VenuePage.propTypes = {
  setVenueName: PropTypes.func.isRequired,
};

export default VenuePage;
