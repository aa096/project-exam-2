import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const PaginationButtons = ({ prevVenue, nextVenue, currentIndex, itemsPerPage, totalItems }) => {
  return (
    <div className="flex justify-center mt-6 gap-4">
      <button onClick={prevVenue} className="px-6 py-2 disabled:opacity-0" disabled={currentIndex === 0}>
        <FontAwesomeIcon
          icon={faChevronLeft}
          className="text-3xl hover:text-tertiary hover:scale-125 transition-all duration-200"
        />
      </button>
      <button
        onClick={nextVenue}
        className="px-6 py-2 disabled:bg-gray-300 disabled:pointer-events-none"
        disabled={currentIndex + itemsPerPage >= totalItems}>
        <FontAwesomeIcon
          icon={faChevronRight}
          className="text-3xl hover:text-tertiary hover:scale-125 transition-all duration-200"
        />
      </button>
    </div>
  );
};

// Legg til PropTypes for å validere props
PaginationButtons.propTypes = {
  prevVenue: PropTypes.func.isRequired,
  nextVenue: PropTypes.func.isRequired,
  currentIndex: PropTypes.number.isRequired,
  itemsPerPage: PropTypes.number.isRequired,
  totalItems: PropTypes.number.isRequired,
};

export default PaginationButtons;
