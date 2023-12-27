import PropTypes from "prop-types";
import "../styles/input-search.css";

const SearchNotes = ({ value, onValueChange }) => {
  return (
    <div className="search-container">
      <i className="fa-solid fa-magnifying-glass icon-search"></i>
      <input type="text" name="title" id="title" placeholder="Find Your Notes With Title" className="input-search" value={value} onChange={(event) => onValueChange(event.target.value)} />
    </div>
  );
};

SearchNotes.propTypes = {
  value: PropTypes.string.isRequired,
  onValueChange: PropTypes.func.isRequired,
};

export default SearchNotes;
