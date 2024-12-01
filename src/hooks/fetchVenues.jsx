import { useEffect, useState } from "react";
import { VENUES_URL } from "../API/constants";
import VenuesIndex from "../components/templates/venuesIndex";

const FetchVenues = () => {
  const [venues, setVenues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [visibleVenues] = useState(4); // Start med å vise 4 kort

  useEffect(() => {
    const fetchVenues = async () => {
      try {
        const response = await fetch(VENUES_URL);

        if (!response.ok) {
          throw new Error("Failed to fetch venues");
        }

        const data = await response.json();
        setVenues(data.data); // Lagre venues i state
      } catch (error) {
        setError(error.message); // Håndtere feil
      } finally {
        setLoading(false); // Sett loading til false når kallet er ferdig
      }
    };

    fetchVenues();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return <VenuesIndex venues={venues} visibleVenues={visibleVenues} />;
};

export default FetchVenues;
