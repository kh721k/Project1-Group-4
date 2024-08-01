import React, {
  FormEvent,
  useEffect,
  useState,
  useRef,
  useContext,
} from "react";

// import 'bootstrap/dist/css/bootstrap.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LOGIN_URL = "http://localhost:8080/login";

const Login = () => {
  // const { useAuth } = useContext(AuthContext);
  // const { login } = useAuth();

  const [user, setUser] = useState("");
  const [password, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const nav = useNavigate();

  // useEffect(() => {
  //   userRef.current.focus();
  // }, [])

  useEffect(() => {
    setErrMsg("");
  }, [user, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        LOGIN_URL,
        { username: user, password: password },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true, // allows cookies to be sent/recieved
        }
      );
      console.log(response.data);
      localStorage.setItem("user", JSON.stringify(response.data));

      const sessionUser = JSON.parse(localStorage.getItem("user"));
      console.log("new logged in user = ", sessionUser);

      nav(`/user/${sessionUser.username}`);
    } catch (error) {
      if (!error?.response) {
        setErrMsg("No Server Response");
        console.log(error);
      } else {
        setErrMsg("Login Failed");
      }
      // errorRef.current.focus();
    }
    
  };

  return (
    <section>
      <p className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">
        {errMsg}
      </p>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          autoComplete="off"
          onChange={(e) => setUser(e.target.value)}
          required
        />
        <br />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          onChange={(e) => setPwd(e.target.value)}
          required
        />
        <div></div>
        <button type="submit">Log in</button>
      </form>
      <p>
        Need an Account?
        <br />
        <span className="line">
          <a href="/register">Register</a>
        </span>
      </p>
    </section>
  );
};

export default Login;
