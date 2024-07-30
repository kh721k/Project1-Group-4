import React, { FormEvent, useEffect, useState, useRef, useContext} from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import AuthContext from "./Context/AuthContext";
import axios from './api/axios';
const LOGIN_URL = '/login';

const Login = () =>{
  const userRef = useRef();
  const errorRef = useRef();

  const [user, setUser] = useState('');
  const [password, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');

  const { setAuth } = useContext(AuthContext);

  useEffect(() => {
    userRef.current.focus();
  }, [])

  useEffect(() => {
    setErrMsg('');
  }, [user, password])

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const response = await axios.post(LOGIN_URL,
          JSON.stringify({ user, password }),
          {
              headers: { 'Content-Type': 'application/json' },
              withCredentials: true
          }
      );
      console.log(JSON.stringify(response?.data));
      setAuth({ user, password});
      setUser('');
      setPwd('');
  } catch(error){
    if (!error?.response) {
      setErrMsg('No Server Response');
    } else {
        setErrMsg('Login Failed');
    }
    errorRef.current.focus();
  }
  }
  return(
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