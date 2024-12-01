import { useEffect, useState } from "react";
import { VENUES_URL } from "../API/constants";
import VenuesTemplate from "../components/templates/venueTemplate";

const FetchVenues = () => {
  const [venues, setVenues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [visibleVenues, setVisibleVenues] = useState(4); // Start med å vise 4 kort

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

  const showMoreVenues = () => {
    setVisibleVenues((prev) => prev + 4); // Legg til 4 flere kort
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return <VenuesTemplate venues={venues} visibleVenues={visibleVenues} showMoreVenues={showMoreVenues} />;
};

export default FetchVenues;
