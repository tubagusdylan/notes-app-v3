import { Link, useNavigate } from "react-router-dom";
import { useInput } from "../utils/customHooks";
import { register } from "../utils/network-data";
import { useContext } from "react";
import TextInput from "../components/TextInput";
import Button from "../components/Button";
import LocaleContext from "../utils/LocaleContext";
import "../styles/login.css";

const RegisterPage = () => {
  const [name, onNameChange] = useInput("");
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");
  const [confirmPw, onConfirmPwChange] = useInput("");
  const { locale } = useContext(LocaleContext);
  const navigate = useNavigate();

  const onSubmitRegister = async (event) => {
    event.preventDefault();
    if (password !== confirmPw) {
      return alert("Password and Confirm Password is Not Same");
    }
    const { error } = await register({ name, email, password });
    if (!error) {
      alert("Registration success");
      return navigate("/");
    }
  };

  return (
    <div className="background-regist">
      <div className="regist-container">
        <h1 className="login-title">Register</h1>
        <form onSubmit={onSubmitRegister}>
          <TextInput type="text" id="Name" placeholder={locale === "id" ? "Masukkan Nama Anda" : "Insert Your Name"} value={name} onValueChange={onNameChange} />
          <TextInput type="email" id="Email" placeholder={locale === "id" ? "Masukkan Email Anda" : "Insert Your Email"} value={email} onValueChange={onEmailChange} />
          <TextInput type="password" id="Password" placeholder={locale === "id" ? "Masukkan Password Anda" : "Insert Your Password"} value={password} onValueChange={onPasswordChange} />
          <TextInput type="password" id="Confirm Password" placeholder={locale === "id" ? "Konfirmasi Password Anda" : "Confirm Your Password"} value={confirmPw} onValueChange={onConfirmPwChange} />
          <Button>Register</Button>
        </form>
        <p>
          {locale === "id" ? "Sudah punya account? " : "Have an account? "}
          <Link to="/" className="link-register">
            LOGIN
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
