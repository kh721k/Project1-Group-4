import React, { FormEvent, useEffect, useState, useRef, useContext } from 'react';

// import 'bootstrap/dist/css/bootstrap.css';
import { AuthContext } from "../../Context/AuthContext.tsx"
import axios from 'axios';

const LOGIN_URL = 'http://localhost:8080/login';

const Login = () => {
  const { useAuth } = useContext(AuthContext);
  const { login } = useAuth();
  const userRef = useRef();
  const errorRef = useRef();

  const [user, setUser] = useState('');
  const [password, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');


  useEffect(() => {
    userRef.current.focus();
  }, [])

  useEffect(() => {
    setErrMsg('');
  }, [user, password])

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(LOGIN_URL,
        { username: user, password: password },
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true // allows cookies to be sent/recieved
        }
      );
      console.log(response?.data);
      login(response.json);
      //setUser('');
      //setPwd('');
      //above 2 lines can he handled by logout in AuthContext on the scale of the whole project as and when needed
    } catch (error) {
      if (!error?.response) {
        setErrMsg('No Server Response');
      } else {
        setErrMsg('Login Failed');
      }
      errorRef.current.focus();
    }
  }
  return (
    <section>
      <p ref={errorRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          ref={userRef}
          autoComplete="off"
          onChange={(e) => setUser(e.target.value)}
          value={user}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          onChange={(e) => setPwd(e.target.value)}
          value={password}
          required
        />
        <button>Sign In</button>
      </form>
      <p>
        Need an Account?<br />
        <span className="line">
          {/*put router link here*/}
          <a href="#">Sign Up</a>
        </span>
      </p>
    </section>
  )
};

export default Login
