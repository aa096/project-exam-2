import { VENUES_URL } from "./constants";

export const getVenuesUrl = (includeOwner = false, includeBookings = false) => {
  let url = `${VENUES_URL}`;

  const params = [];
  if (includeOwner) params.push("_owner=true");
  if (includeBookings) params.push("_bookings=true");

  if (params.length > 0) {
    url += `?${params.join("&")}`;
  }

  return url;
};
