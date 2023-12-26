import TextInput from "../components/TextInput";
import Button from "../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { useInput } from "../utils/customHooks";
import { register } from "../utils/network-data";
import "../styles/login.css";

const RegisterPage = () => {
  const [name, onNameChange] = useInput("");
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");
  const [confirmPw, onConfirmPwChange] = useInput("");
  const navigate = useNavigate();

  const onSubmitRegister = async (event) => {
    event.preventDefault();
    if (password !== confirmPw) {
      return alert("Password dan Confirm Password tidak sama");
    }
    const { error } = await register({ name, email, password });
    if (!error) {
      return navigate("/");
    }
  };

  return (
    <div className="regist-container">
      <h1 className="login-title">Register</h1>
      <form onSubmit={onSubmitRegister}>
        <TextInput type="text" id="Name" placeholder="Insert Your Name" value={name} onValueChange={onNameChange} />
        <TextInput type="email" id="Email" placeholder="Insert Your Email" value={email} onValueChange={onEmailChange} />
        <TextInput type="password" id="Password" placeholder="Insert Your Password" value={password} onValueChange={onPasswordChange} />
        <TextInput type="password" id="Confirm Password" placeholder="Confirm Your Password" value={confirmPw} onValueChange={onConfirmPwChange} />
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
