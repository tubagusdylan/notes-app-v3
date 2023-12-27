import { Link, useNavigate } from "react-router-dom";
import { useInput } from "../utils/customHooks";
import { login, putAccessToken } from "../utils/network-data";
import { useContext } from "react";
import Button from "../components/Button";
import TextInput from "../components/TextInput";
import LocaleContext from "../utils/LocaleContext";
import "../styles/login.css";

const LoginPage = () => {
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");
  const { locale } = useContext(LocaleContext);
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
    <div className="background">
      <div className="login-container">
        <h1 className="login-title">Login</h1>
        <form onSubmit={onSubmitLogin}>
          <TextInput type="email" id="Email" placeholder={locale === "id" ? "Masukkan Email Anda" : "Insert Your Email"} value={email} onValueChange={onEmailChange} />
          <TextInput type="password" id="Password" placeholder={locale === "id" ? "Masukkan Password Anda" : "Insert Your Password"} value={password} onValueChange={onPasswordChange} />
          <Button>Login</Button>
        </form>
        <p>
          {locale === "id" ? "Pengguna baru? " : "New user? "}
          <Link to="/register" className="link-register">
            {locale === "id" ? "DAFTAR" : "REGISTER"}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
