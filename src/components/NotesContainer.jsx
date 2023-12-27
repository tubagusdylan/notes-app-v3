import NotesCard from "./NotesCard";
import PropTypes from "prop-types";
import "../styles/notes-container.css";

const NotesContainer = ({ notes }) => {
  return (
    <div className="notes-container">
      {notes.map((value, index) => {
        return <NotesCard key={index} {...value} />;
      })}
    </div>
  );
};

NotesContainer.propTypes = {
  notes: PropTypes.array.isRequired,
};

export default NotesContainer;
