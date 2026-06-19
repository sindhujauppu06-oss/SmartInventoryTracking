import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { InventoryContext } from "../context/InventoryContext";

function Signup() {
  const navigate = useNavigate();

  const { addUser } =
    useContext(InventoryContext);

  const [username, setUsername] =
    useState("");

  const [password, setPassword] =
    useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    addUser(username, password);

    alert("Account Created Successfully");

    navigate("/");
  };

  return (
    <div className="login-container">
      <h1>Sign Up</h1>

      <form onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="Create Username"
          value={username}
          onChange={(e) =>
            setUsername(e.target.value)
          }
          required
        />

        <input
          type="password"
          placeholder="Create Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          required
        />

        <button type="submit">
          Sign Up
        </button>
      </form>

      <p>
        Already have an account?{" "}
        <Link to="/">
          Login
        </Link>
      </p>
    </div>
  );
}

export default Signup;