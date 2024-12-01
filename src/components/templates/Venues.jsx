import { useState } from "react";
import useVenues from "../../hooks/useVenues";
import VenueCard from "./VenueCard";
import ShowMoreBtn from "../UI/ShowMoreBtn";
import plane from "/assets/fly.png";

const VenuesPage = () => {
  const { venues, loading, error } = useVenues();
  const [visibleVenuesCount, setVisibleVenuesCount] = useState(12);

  const handleShowMore = () => {
    setVisibleVenuesCount((prevCount) => prevCount + 4);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const visibleVenues = venues.slice(0, visibleVenuesCount);

  return (
    <section>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-medium uppercase mb-6 text-center">Venues</h1>
        <div className="flex justify-center flex-row">
          <img src={plane} alt="plane icon flying to destination" className="mx-auto w-[300px] mb-10" />
        </div>
        <div className="flex flex-wrap gap-3 justify-center">
          {visibleVenues.map((venue) => (
            <VenueCard key={venue.id} venue={venue} />
          ))}
        </div>
        <ShowMoreBtn onClick={handleShowMore} isVisible={visibleVenuesCount < venues.length} />
      </div>
    </section>
  );
};

export default VenuesPage;
