import PropTypes from "prop-types";

const ShowMoreBtn = ({ onClick, isVisible }) => {
  return (
    isVisible && (
      <div className="text-center mt-6">
        <button
          onClick={onClick}
          className="bg-white py-2 px-4 rounded-lg hover:bg-secondary transition-all shadow-custom-card uppercase border-[1px] border-primary">
          + Show More
        </button>
      </div>
    )
  );
};

ShowMoreBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
  isVisible: PropTypes.bool.isRequired,
};

export default ShowMoreBtn;
