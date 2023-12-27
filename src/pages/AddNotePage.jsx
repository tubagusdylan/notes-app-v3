import { useNavigate } from "react-router-dom";
import { useInput } from "../utils/customHooks";
import { addNote } from "../utils/network-data";
import "../styles/new-notes.css";

const AddNotePage = () => {
  const [title, onTitleChange] = useInput("");
  const [body, onBodyChange] = useInput("");
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
      <h1>Catat segera jangan sampai lupa!</h1>
      <form onSubmit={onAddNewNote}>
        <input type="text" name="title" id="title" className="title-input" placeholder="Ini Judul Catatan" onChange={onTitleChange} value={title} />
        <textarea name="body" id="body" className="body-input" placeholder="Ini Isi Catatan" rows={12} onChange={onBodyChange} value={body}></textarea>
        <button className="button">
          <i className="fa-solid fa-check"></i>
        </button>
      </form>
    </div>
  );
};

export default AddNotePage;
