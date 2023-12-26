import TextInput from "../components/TextInput";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import "../styles/login.css";

const RegisterPage = () => {
  return (
    <div className="regist-container">
      <h1 className="login-title">Register</h1>
      <form>
        <TextInput type="text" id="Name" placeholder="Insert Your Name" />
        <TextInput type="email" id="Email" placeholder="Insert Your Email" />
        <TextInput type="password" id="Password" placeholder="Insert Your Password" />
        <TextInput type="password" id="Confirm Password" placeholder="Confirm Your Password" />
        <Button>Register</Button>
      </form>
      <p>
        Have an account?{" "}
        <Link to="/" className="link-register">
          LOGIN
        </Link>
      </p>
    </div>
  );
};

export default RegisterPage;
