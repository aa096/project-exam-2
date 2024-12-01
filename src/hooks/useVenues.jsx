// hooks/useVenues.js
import { useState, useEffect } from "react";
import { VENUES_URL } from "../API/constants";
import { getRandomLocation } from "../components/templates/dummyLocation";

const useVenues = () => {
  const [venues, setVenues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVenues = async () => {
      try {
        const response = await fetch(VENUES_URL);
        if (!response.ok) {
          throw new Error("Failed to fetch venues");
        }

        const data = await response.json();

        const updatedVenues = data.data.map((venue) => ({
          ...venue,
          location: {
            ...venue.location,
            country: venue.location?.country || getRandomLocation(),
          },
        }));

        setVenues(updatedVenues);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchVenues();
  }, []);

  return { venues, loading, error };
};

export default useVenues;
