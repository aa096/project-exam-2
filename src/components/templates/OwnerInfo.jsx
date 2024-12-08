import PropTypes from "prop-types";

const OwnerInfo = ({ owner }) => (
  <div className="owner-info">
    <img src={owner.avatar.url} alt={`${owner.name}'s avatar`} />
    <h2>{owner.name}</h2>
  </div>
);

OwnerInfo.propTypes = {
  owner: PropTypes.shape({
    avatar: PropTypes.shape({
      url: PropTypes.string.isRequired,
    }).isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default OwnerInfo;
