const useFilteredAndSortedVenues = (venues, searchQuery, sortCriteria) => {
  return venues
    .filter((venue) => {
      const query = searchQuery.toLowerCase();

      const nameMatches = venue.name?.toLowerCase().includes(query);
      const cityMatches = venue.location?.city?.toLowerCase().includes(query);
      const countryMatches = venue.location?.country?.toLowerCase().includes(query);
      const descriptionMatches = venue.description?.toLowerCase().includes(query);
      const tagsMatches = venue.tags?.some((tag) => tag.toLowerCase().includes(query));

      return nameMatches || cityMatches || countryMatches || descriptionMatches || tagsMatches;
    })
    .sort((a, b) => {
      if (sortCriteria === "priceLowToHigh") return a.price - b.price;
      if (sortCriteria === "priceHighToLow") return b.price - a.price;
      if (sortCriteria === "highestRating") return b.rating - a.rating;
      return 0;
    });
};

export default useFilteredAndSortedVenues;
