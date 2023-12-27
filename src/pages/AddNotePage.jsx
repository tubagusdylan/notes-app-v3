import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { useInput } from "../utils/customHooks";
import { addNote } from "../utils/network-data";
import LocaleContext from "../utils/LocaleContext";
import "../styles/new-notes.css";

const AddNotePage = () => {
  const [title, onTitleChange] = useInput("");
  const [body, onBodyChange] = useInput("");
  const { locale } = useContext(LocaleContext);
  const navigate = useNavigate();

  const onAddNewNote = async (event) => {
    event.preventDefault();
    const { error } = await addNote({ title, body });
    if (!error) {
      return navigate("/");
    }
  };

  return (
    <div className="container">
      <h1>{locale === "id" ? "Catat segera jangan sampai lupa!" : "Don't forget to write your note"}</h1>
      <form onSubmit={onAddNewNote}>
        <input type="text" name="title" id="title" className="title-input" placeholder={locale === "id" ? "Ini Judul Catatan" : "This is your note title"} onChange={onTitleChange} value={title} />
        <textarea name="body" id="body" className="body-input" placeholder={locale === "id" ? "Ini Isi Catatan" : "This is your note body"} rows={12} onChange={onBodyChange} value={body}></textarea>
        <button className="button">
          <i className="fa-solid fa-check"></i>
        </button>
      </form>
    </div>
  );
};

export default AddNotePage;
