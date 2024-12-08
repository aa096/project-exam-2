import PropTypes from "prop-types";

const venuePropTypes = {
  venues: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      name: PropTypes.string.isRequired,
      location: PropTypes.shape({
        country: PropTypes.string,
      }),
      maxGuests: PropTypes.number,
      price: PropTypes.number,
      rating: PropTypes.number,
      media: PropTypes.arrayOf(
        PropTypes.shape({
          url: PropTypes.string.isRequired,
          alt: PropTypes.string,
        })
      ),
    })
  ).isRequired,
};

export default venuePropTypes;
