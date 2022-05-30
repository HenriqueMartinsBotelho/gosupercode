import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const login = () => {
    localStorage.setItem("user", JSON.stringify({ role: "ADMIN" }));
    navigate("/dashboard");
  };

  return (
    <div className="login">
      <h2>Login</h2>
      <p>Please loging to continue</p>
      <button onClick={login}>Login</button>
    </div>
  );
};

export default Login;
