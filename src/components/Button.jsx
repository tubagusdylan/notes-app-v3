import PropTypes from "prop-types";
import "../styles/button.css";

const Button = ({ children }) => {
  return (
    <>
      <button className="btn-login-register">{children}</button>
    </>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Button;
