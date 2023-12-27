import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { formatedTimeStamp } from "../utils/timeStamp";
import "../styles/notes-card.css";

const NotesCard = ({ id, title, createdAt, body }) => {
  return (
    <div className="card">
      <Link to={`/notes/${id}`} className="link-title">
        <h2>{title}</h2>
      </Link>
      <span>{formatedTimeStamp(createdAt)}</span>
      <p>{body}</p>
    </div>
  );
};

NotesCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default NotesCard;
