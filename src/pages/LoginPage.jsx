import TextInput from "../components/TextInput";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import "../styles/login.css";

const LoginPage = () => {
  return (
    <div className="login-container">
      <h1 className="login-title">Login</h1>
      <form>
        <TextInput type="email" id="Email" placeholder="Insert Your Email" />
        <TextInput type="password" id="Password" placeholder="Insert Your Password" />
        <Button>Login</Button>
      </form>
      <p>
        New User?{" "}
        <Link to="/register" className="link-register">
          REGISTER
        </Link>
      </p>
    </div>
  );
};

export default LoginPage;
