import TextInput from "../components/TextInput";
import Button from "../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { useInput } from "../utils/customHooks";
import { login, putAccessToken } from "../utils/network-data";
import "../styles/login.css";

const LoginPage = () => {
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");
  const navigate = useNavigate();

  const onSubmitLogin = async (event) => {
    event.preventDefault();
    const { error, data } = await login({ email, password });
    if (!error) {
      putAccessToken(data.accessToken);
      return navigate(0);
    }
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Login</h1>
      <form onSubmit={onSubmitLogin}>
        <TextInput type="email" id="Email" placeholder="Insert Your Email" value={email} onValueChange={onEmailChange} />
        <TextInput type="password" id="Password" placeholder="Insert Your Password" value={password} onValueChange={onPasswordChange} />
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
