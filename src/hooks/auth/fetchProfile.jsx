import { PROFILES_URL, API_KEY } from "../../API/constants";

export const fetchProfileData = async (user, token) => {
  const url = `${PROFILES_URL}/${user.name}?_venues=true&_bookings=true`;
  const headers = {
    Authorization: `Bearer ${token}`,
    "X-Noroff-API-Key": API_KEY,
  };

  const response = await fetch(url, {
    method: "GET",
    headers: headers,
  });

  if (!response.ok) {
    const errorResponse = await response.json();
    throw new Error(errorResponse?.errors?.[0]?.message || "Failed to fetch profile.");
  }

  const result = await response.json();
  const getVenueImage = (venue) => venue.media && venue.media[0]?.url;
  const getBookingImage = (booking) => booking.media && booking.media[0]?.url;

  return {
    name: result.data.name,
    bio: result.data.bio,
    avatar: result.data.avatar,
    banner: result.data.banner,
    venueManager: result.data.venueManager,
    venues: result.data.venues,
    bookings: result.data.bookings,
    venuesMedia: result.data.venues.map(getVenueImage),
    bookingsMedia: result.data.bookings.map(getBookingImage),
  };
};
