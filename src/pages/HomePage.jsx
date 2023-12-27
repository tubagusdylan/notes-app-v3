import SearchNotes from "../components/SearchNotes";
import NotesContainer from "../components/NotesContainer";
import Loading from "../components/Loading";
import LocaleContext from "../utils/LocaleContext";
import { useState, useEffect, useContext } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { getUserLogged, getActiveNotes } from "../utils/network-data";
import "../styles/home.css";

const HomePage = () => {
  const [userName, setUserName] = useState("");
  const [notes, setNotes] = useState(null);
  const [searchNotes, setSearchNotes] = useState([]);
  const [searchParam, setSearchParam] = useSearchParams("");
  const { locale } = useContext(LocaleContext);

  const title = searchParam.get("title") || "";

  const getSearchNote = (keyword) => {
    const activeNote = notes.filter((note) => !note.archived);
    const specifyNote = activeNote.filter((note) => note.title.toLowerCase().includes(keyword.toLowerCase()));
    setSearchNotes(specifyNote);
  };

  const changeSearchParam = (keyword) => {
    setSearchParam({ title: keyword });
    getSearchNote(keyword);
  };

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

  if (notes === null) {
    return <Loading />;
  }

  return (
    <div className="container">
      <h1>{locale === "id" ? `Selamat Datang, ${userName}` : `Welcome, ${userName}`}</h1>
      <h1>{locale === "id" ? "Catatan Aktif" : "Active Notes"}</h1>
      <SearchNotes value={title} onValueChange={changeSearchParam} />
      {notes.length > 0 ? <NotesContainer notes={title.length > 0 ? searchNotes : notes} /> : <p className="msg">{locale === "id" ? "Catatan belum ada" : "Empty Notes"}</p>}
      <Link to="/notes/new">
        <button className="button">
          <i className="fa-solid fa-plus"></i>
        </button>
      </Link>
    </div>
  );
};

export default HomePage;
