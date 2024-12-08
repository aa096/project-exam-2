import plane from "/assets/fly.png";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faRightFromBracket, faLocationDot, faStar } from "@fortawesome/free-solid-svg-icons";

const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};

const ProfileTemplate = ({ profileData }) => {
  const navigate = useNavigate();

  if (!profileData) return <div>Loading...</div>;

  const { name, bio, avatar, banner, venueManager, bookings, venues, venuesMedia } = profileData;

  console.log("Profile Data:", profileData);
  console.log("Venues:", venues);
  console.log("Bookings:", bookings);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const renderCard = (data, index) => (
    <div key={data.id} className="flex flex-col md:flex-row gap-10 w-full p-4 rounded-lg m-4">
      <img
        src={venuesMedia[index] || "/assets/default-venue.jpg"}
        alt={data.name || "Default venue image"}
        className="w-48 h-48 object-cover object-center"
      />
      <div className="p-4 mt-5">
        <h4 className="text-lg font-medium uppercase">{data.name}</h4>
        <div>
          <FontAwesomeIcon icon={faLocationDot} />
          <span className="ml-2">{data.location.country}</span>
          <FontAwesomeIcon icon={faStar} className="ml-6" /> <span> {data.rating} / 5 </span>
        </div>
        {venueManager ? (
          <p className="text-sm uppercase mt-2">Bookings: {data._count?.bookings || 0}</p>
        ) : (
          <p className="text-sm">Booked Venue: {data.venueName || "Unknown venue"}</p>
        )}
      </div>
    </div>
  );

  return (
    <div>
      <h1 className="text-4xl font-medium text-center uppercase mt-6 mb-16">{name}</h1>
      <div className="container pb-8 bg-white rounded-[20px] shadow-custom-card mb-16">
        {banner?.url && (
          <img
            src={banner.url}
            alt={banner.alt || "Banner Image"}
            className="w-full h-[250px] object-cover rounded-t-[20px]"
          />
        )}
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col">
            <img
              src={avatar?.url || "/assets/default-avatar.png"}
              alt={avatar?.alt || "Profile Avatar"}
              className="w-[240px] h-[240px] md:w-[280px] md:h-[280px] rounded-full object-cover lg:-mt-18 md:-ml-2 -mt-28 mx-auto md:mx-0 object-center"
            />
            <Link to="/updateprofile">
              <button className="flex items-center mx-auto uppercase mt-4 text-primary border-none hover:text-tertiary transition">
                <FontAwesomeIcon icon={faPenToSquare} className="mr-2" /> Edit profile
              </button>
            </Link>
            <button
              onClick={handleLogout}
              className="flex items-center mx-auto uppercase mt-2 mb-3 border-none hover:text-tertiary transition font-sourceSans">
              <FontAwesomeIcon icon={faRightFromBracket} className="mr-2" /> Log out
            </button>
          </div>
          <div className="flex flex-col mt-5 mx-auto">
            <h2 className="uppercase text-xl font-medium text-center">
              {venueManager ? "Venue Manager" : "Holidaze Booker"}
            </h2>
            <p className="break-words line-clamp-8 mt-5">{bio || "No bio available"}</p>
          </div>
        </div>
        <div className="flex justify-center mt-7">
          <h3 className="mt-5 text-[22px] font-medium uppercase mb-6">
            {venueManager ? "Your Venues" : "Your Bookings"}
          </h3>
        </div>
        <div className="flex flex-wrap justify-center p-8 mx-16 bg-[#F7F4F0]">
          {venues?.length > 0 ? (
            venues.map(renderCard)
          ) : bookings?.length > 0 ? (
            bookings.map(renderCard)
          ) : (
            <p>No data to display</p>
          )}
        </div>
        <img src={plane} alt="plane icon flying to destination" className="mx-auto w-[300px] my-6" />
      </div>
    </div>
  );
};

ProfileTemplate.propTypes = {
  profileData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    avatar: PropTypes.shape({
      url: PropTypes.string,
      alt: PropTypes.string,
    }),
    banner: PropTypes.shape({
      url: PropTypes.string,
      alt: PropTypes.string,
    }),
    venueManager: PropTypes.bool.isRequired,
    bookings: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        venueName: PropTypes.string.isRequired,
        image: PropTypes.string,
        location: PropTypes.string,
        rating: PropTypes.number,
      })
    ),
    venues: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        image: PropTypes.string,
        location: PropTypes.string,
        rating: PropTypes.number,
      })
    ),
    venuesMedia: PropTypes.arrayOf(PropTypes.string), // Array of media URLs
  }).isRequired,
};

export default ProfileTemplate;
