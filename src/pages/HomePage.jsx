import SearchNotes from "../components/SearchNotes";
import NotesContainer from "../components/NotesContainer";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getUserLogged, getActiveNotes } from "../utils/network-data";
import "../styles/home.css";

const HomePage = () => {
  const [userName, setUserName] = useState("");
  const [notes, setNotes] = useState([]);

  const getUserData = async () => {
    const { error, data } = await getUserLogged();
    if (!error) {
      setUserName(data.name);
    }
  };

  const getNotesData = async () => {
    const { error, data } = await getActiveNotes();
    if (!error) {
      setNotes(data);
    }
  };

  useEffect(() => {
    getUserData();
    getNotesData();

    return () => {
      setUserName("");
      setNotes([]);
    };
  }, []);

  return (
    <div className="container">
      <h1>Welcome, {userName}</h1>
      <h1>Active Notes</h1>
      <SearchNotes />
      {notes.length > 0 ? <NotesContainer notes={notes} /> : <p className="msg">Catatan kosong</p>}
      <Link to="/notes/new">
        <button className="button">
          <i className="fa-solid fa-plus"></i>
        </button>
      </Link>
    </div>
  );
};

export default HomePage;
