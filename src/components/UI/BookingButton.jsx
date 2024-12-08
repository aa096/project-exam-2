import PropTypes from "prop-types";

const BookingButton = ({ handleBooking, loading }) => (
  <button
    onClick={handleBooking}
    disabled={loading}
    className={`mt-4 px-6 py-2 bg-primary text-white rounded ${
      loading ? "opacity-50 cursor-not-allowed" : "hover:bg-primary-dark"
    }`}>
    {loading ? "Booking..." : "Book Now"}
  </button>
);

BookingButton.propTypes = {
  handleBooking: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default BookingButton;
