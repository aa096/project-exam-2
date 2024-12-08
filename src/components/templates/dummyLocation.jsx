export const dummyLocations = [
  "Dreamland",
  "Wonderville",
  "Nowhere City",
  "Mystic Island",
  "Sunny Shores",
  "Hidden Valley",
  "Adventure Town",
  "Blissfield",
];

export const getRandomLocation = () => {
  return dummyLocations[Math.floor(Math.random() * dummyLocations.length)];
};
