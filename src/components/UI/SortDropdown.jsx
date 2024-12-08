import PropTypes from "prop-types";

const SortDropdown = ({ value, onChange }) => {
  return (
    <div>
      <select
        className="px-4 py-2 rounded-[17px] w-full bg-white focus:outline-none focus:border-tertiary border border-primary"
        value={value}
        onChange={(e) => onChange(e.target.value)}>
        <option value="">Sort By</option>
        <option value="priceLowToHigh" className="text-gray-800">
          Price: Low to High
        </option>
        <option value="priceHighToLow" className="text-gray-800">
          Price: High to Low
        </option>
        <option value="highestRating" className="text-gray-800">
          Highest Rating
        </option>
      </select>
    </div>
  );
};

SortDropdown.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SortDropdown;
