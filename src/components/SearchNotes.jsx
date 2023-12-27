import "../styles/input-search.css";

const SearchNotes = () => {
  return (
    <div className="search-container">
      <i className="fa-solid fa-magnifying-glass icon-search"></i>
      <input type="text" name="title" id="title" placeholder="Find Your Notes With Title" className="input-search" />
    </div>
  );
};

export default SearchNotes;
