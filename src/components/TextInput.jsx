import PropTypes from "prop-types";
import "../styles/text-input.css";

const TextInput = ({ type, id, placeholder }) => {
  return (
    <>
      <label htmlFor={id} className="input-label">
        {id}
      </label>
      <input type={type} id={id} placeholder={placeholder} className="input-unique" />
    </>
  );
};

TextInput.propTypes = {
  type: PropTypes.oneOf(["text", "password", "email"]).isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default TextInput;
