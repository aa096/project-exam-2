import { useState, useEffect } from "react";
import { VENUES_URL } from "../API/constants";

const useVenue = (id) => {
  const [venue, setVenue] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVenue = async () => {
      try {
        const response = await fetch(`${VENUES_URL}/${id}`);
        const data = await response.json();
        setVenue(data.data); // Pass kun `data`-delen av responsen
        setLoading(false);
      } catch (err) {
        setError(err.message || "An error occurred");
        setLoading(false);
      }
    };

    fetchVenue();
  }, [id]);

  return { venue, loading, error };
};

export default useVenue;
