import { VENUES_URL, API_KEY } from "../API/constants";

export async function createVenue(venueData) {
  const token = localStorage.getItem("token");

  if (!token) {
    console.error("No token found. Please log in.");
    return;
  }

  const url = VENUES_URL;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Noroff-API-Key": API_KEY,
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(venueData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("API Error:", errorData);
      throw new Error(errorData.errors?.[0]?.message || "Failed to create venue");
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error("Fetch Error:", error.message);
    throw error;
  }
}
