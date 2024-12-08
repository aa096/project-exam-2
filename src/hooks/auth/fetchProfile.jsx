import { PROFILES_URL, API_KEY } from "../../API/constants";

export const fetchProfileData = async (user, token) => {
  const url = `${PROFILES_URL}/${user.name}`;
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
  return {
    name: result.data.name,
    bio: result.data.bio,
    avatar: result.data.avatar,
    banner: result.data.banner,
    venueManager: result.data.venueManager,
  };
};
