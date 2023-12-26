import PropTypes from "prop-types";
import "../styles/text-input.css";

const TextInput = ({ type, id, placeholder, value, onValueChange }) => {
  return (
    <>
      <label htmlFor={id} className="input-label">
        {id}
      </label>
      <input type={type} id={id} placeholder={placeholder} className="input-unique" value={value} onChange={onValueChange} />
    </>
  );
};

TextInput.propTypes = {
  type: PropTypes.oneOf(["text", "password", "email"]).isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onValueChange: PropTypes.func.isRequired,
};

export default TextInput;
