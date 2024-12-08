import PropTypes from "prop-types";

const GuestSelector = ({ guests, setGuests, maxGuests }) => (
  <div className="mt-4">
    <label className="block text-sm font-medium">
      Number of Guests:
      <input
        type="number"
        min="1"
        max={maxGuests}
        value={guests}
        onChange={(e) => setGuests(parseInt(e.target.value, 10))}
        className="block mx-auto p-2 mt-1 border rounded-lg mb-4"
      />
    </label>
  </div>
);

GuestSelector.propTypes = {
  guests: PropTypes.number.isRequired,
  setGuests: PropTypes.func.isRequired,
  maxGuests: PropTypes.number.isRequired,
};

export default GuestSelector;
