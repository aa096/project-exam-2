import { PROFILES_URL, API_KEY } from "../API/constants";

export async function updateProfile(profile) {
  const token = localStorage.getItem("token");

  if (!profile.name) {
    throw new Error("Profile name is missing.");
  }

  const updateURL = `${PROFILES_URL}/${profile.name}`;

  const response = await fetch(updateURL, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
      "X-Noroff-API-Key": API_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(profile),
  });

  if (!response.ok) {
    const errorResponse = await response.json();
    const errorMessage = errorResponse?.errors?.[0]?.message || "Profile update failed. Please try again.";
    throw new Error(errorMessage);
  }

  const result = await response.json();
  return result;
}
