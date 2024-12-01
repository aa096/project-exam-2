import PropTypes from "prop-types";

export const venuePropType = PropTypes.shape({
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
});

export const venuesPropType = PropTypes.arrayOf(venuePropType).isRequired;
