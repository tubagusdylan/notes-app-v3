import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { formatedTimeStamp } from "../utils/timeStamp";
import { archiveNote, deleteNote, getNote, unarchiveNote } from "../utils/network-data";
import "../styles/detail-notes.css";

const DetailNotePage = () => {
  const [notes, setNotes] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  const onArchiveNote = async () => {
    const { error } = await archiveNote(id);
    if (!error) {
      return navigate("/");
    }
  };

  const onUnarchiveNote = async () => {
    const { error } = await unarchiveNote(id);
    if (!error) {
      return navigate("/");
    }
  };

  const onDeleteNote = async () => {
    const { error } = await deleteNote(id);
    if (!error) {
      return navigate("/");
    }
  };

  useEffect(() => {
    const getDetailNote = async () => {
      const { error, data } = await getNote(id);
      if (!error) {
        setNotes(data);
      }
    };

    getDetailNote();

    return () => {
      setNotes(null);
    };
  }, [id]);

  return (
    <div className="container-2">
      <h2 className="note-title">{notes?.title}</h2>
      <span className="note-time">{formatedTimeStamp(notes?.createdAt)}</span>
      <p className="note-body">{notes?.body}</p>
      <div className="button-wrap">
        {!notes?.archived ? (
          <button className="button-2" onClick={onArchiveNote}>
            <i className="fa-solid fa-bookmark"></i>
          </button>
        ) : (
          <button className="button-2" onClick={onUnarchiveNote}>
            <i className="fa-solid fa-repeat"></i>
          </button>
        )}
        <button className="button-2" onClick={onDeleteNote}>
          <i className="fa-solid fa-trash-can"></i>
        </button>
      </div>
    </div>
  );
};

export default DetailNotePage;
