import useFilteredAndSortedVenues from "../../hooks/UseFilteredAndSorted";
import { useState } from "react";
import useVenues from "../../hooks/useVenues";
import VenueCard from "./VenueCard";
import ShowMoreBtn from "../UI/ShowMoreBtn";
import plane from "/assets/fly.png";
import { SearchBar, SortDropdown } from "../UI";

const VenuesPage = () => {
  const { venues, loading, error } = useVenues();
  const [visibleVenuesCount, setVisibleVenuesCount] = useState(12);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortCriteria, setSortCriteria] = useState("");

  const filteredVenues = useFilteredAndSortedVenues(venues, searchQuery, sortCriteria);

  const handleShowMore = () => {
    setVisibleVenuesCount((prevCount) => prevCount + 4);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const visibleVenues = filteredVenues.slice(0, visibleVenuesCount);

  return (
    <section>
      <div className="container mx-auto px-10 py-8">
        <div className="flex flex-wrap flex-col lg:flex-row justify-center items-center mb-14 gap-6">
          <div className="order-1 lg:order-2 flex justify-center">
            <img src={plane} alt="plane icon flying to destination" className="mx-auto w-[300px] my-6" />
          </div>

          <div className="order-3 lg:order-1 lg:w-auto mx-auto">
            <SearchBar value={searchQuery} onChange={setSearchQuery} />
          </div>

          <div className="order-2 lg:order-3 mx-auto lg:w-auto">
            <SortDropdown value={sortCriteria} onChange={setSortCriteria} />
          </div>
        </div>

        <div className="flex flex-wrap gap-3 justify-center">
          {visibleVenues.map((venue) => (
            <VenueCard key={venue.id} venue={venue} />
          ))}
        </div>

        <ShowMoreBtn onClick={handleShowMore} isVisible={visibleVenuesCount < filteredVenues.length} />
      </div>
    </section>
  );
};

export default VenuesPage;
