import { API_KEY, VENUES_URL } from "../API/constants";

export const deleteVenue = async (venueId) => {
    const token = localStorage.getItem("token");

    if (!token || !venueId) {
        throw new Error("Missing token or venueId");
    }

    const url = `${VENUES_URL}/${venueId}`; 

    try {
        const response = await fetch(url, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "X-Noroff-API-Key": API_KEY,
                Authorization: `Bearer ${token}`,
            },
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`Failed to delete venue: ${errorData.message || response.statusText}`);
        }

        return response.json(); 
    } catch (error) {
        console.error("Error deleting venue:", error);
        throw error;
    }
};
