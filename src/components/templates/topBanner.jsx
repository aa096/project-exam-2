import { useState } from "react";
import PropTypes from "prop-types"; // Legg til importen av PropTypes
import topImage from "/assets/unsplash.webp";
import plane from "/assets/fly2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlassLocation } from "@fortawesome/free-solid-svg-icons";

export default function TopBanner({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    onSearch(event.target.value); // Kaller på onSearch
  };

  return (
    <div className="flex flex-wrap">
      <div className="flex flex-col mx-auto w-[325px] sm:w-[420px] md:w-[500px] bg-tertiary py-7 px-7 rounded-[25px] order-2 lg:order500-1 z-10 -mt-16 sm:-mt-32 lg:mt-44 lg:ms-8 xl:ml-28">
        <img src={plane} alt="plane icon flying to destination" className="w-1/2 mx-auto -mr-2 sm:mr-14" />
        <h1 className="text-[25px] font-anton uppercase -mt-11">Book Your Stay</h1>
        <p className="mt-2">Discover the perfect getaway with Holidaze</p>

        <div className="relative w-full mt-4">
          <FontAwesomeIcon
            icon={faMagnifyingGlassLocation}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 text-primary"
          />
          <input
            type="text"
            className="border-[0.8px] rounded-full p-2 pl-12 text-primary border-primary placeholder:text-primary focus:border-primary focus:outline-none w-full"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search for venues..."
          />
        </div>
      </div>

      <div className="flex justify-center lg:justify-end lg:ms-20 xl:ml-5 my-10 mx-5 order-1 lg:order-2 w-full lg:-mt-80 z-0">
        <img
          src={topImage}
          alt="tropical holiday home next to blue sea and palms"
          className="rounded-[25px] max-w-full lg:max-w-4xl height"
        />
      </div>
    </div>
  );
}

TopBanner.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
