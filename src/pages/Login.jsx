import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { InventoryContext } from "../context/InventoryContext";

function Login() {
  const navigate = useNavigate();

  const { loginUser } =
    useContext(InventoryContext);

  const [username, setUsername] =
    useState("");

  const [password, setPassword] =
    useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    console.log(
      "Entered Username:",
      username
    );

    console.log(
      "Entered Password:",
      password
    );

    const success = loginUser(
      username.trim(),
      password.trim()
    );

    console.log(
      "Login Success:",
      success
    );

    if (success) {
      alert("Login Successful");
      navigate("/dashboard");
    } else {
      alert("Invalid Username or Password");
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>

      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) =>
            setUsername(e.target.value)
          }
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          required
        />

        <button type="submit">
          Login
        </button>
      </form>

      <p>
        Don't have an account?{" "}
        <Link to="/signup">
          Sign Up
        </Link>
      </p>
    </div>
  );
}

export default Login;