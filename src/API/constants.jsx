export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
export const API_KEY = import.meta.env.VITE_API_KEY;

export const HOLIDAZE_URL = "holidaze";
export const BOOKINGS_URL = `${API_BASE_URL}/${HOLIDAZE_URL}/bookings`;
export const PROFILES_URL = `${API_BASE_URL}/${HOLIDAZE_URL}/profiles`;
export const VENUES_URL = `${API_BASE_URL}/${HOLIDAZE_URL}/venues`;
