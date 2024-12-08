import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchBar = ({ value, onChange }) => {
  return (
    <div className="flex items-center border rounded-[15px] px-3 border-primary focus-within:border-tertiary bg-white">
      <FontAwesomeIcon icon={faMagnifyingGlass} className="text-gray-500" />
      <input
        type="text"
        className="py-2 pl-2 flex-grow focus:outline-none bg-transparent"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchBar;
