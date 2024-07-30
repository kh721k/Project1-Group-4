import React, { useRef, useState, useEffect } from 'react';
import axios from '../api/axios';

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = '/register';

const Register = () => {
const userRef = useRef();
const errorRef = useRef();

const [user, setUser] = useState('');
const [password, setPwd] = useState('');
const [errorMsg, setErrMsg] = useState('');
const [firstname, setFirstname] = useState('');
const [lastname, setLastname] = useState('');
const [email, setEmail] = useState('');
const [bio, setBio] = useState('');

const [userFocus, setUserFocus] = useState(false);
const [pwdFocus, setPwdFocus] = useState(false);

useEffect(() => {
  userRef.current.focus();
}, [])

useEffect(() => {
  setUser(USER_REGEX.test(user))
}, [user])

useEffect(() => {
  setPwd(PWD_REGEX.test(password));
}, [password])

useEffect(() => {
  setErrMsg('');
}, [user, password])

const handleSubmit = async(e) => {
  e.preventDefault();
  const check1 = USER_REGEX.test(user);
  const check2 = PWD_REGEX.test(password);
  if(!check1 || !check2){
    setErrMsg("Invalid login information");
    return;
  }
  try {
    const response = await axios.post(REGISTER_URL,
        JSON.stringify({ user, password , firstname, lastname, email, bio}),
        {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true
        }
    );
    console.log(JSON.stringify(response?.data));
    setUser('');
    setPwd('');
    setFirstname('');
    setLastname('');
    setEmail('');
    setBio('');
  } catch (err) {
      if (!err?.response) {
          setErrMsg('No Server Response');
      }else {
         setErrMsg('Registration Failed')
      }
      errorRef.current.focus();
}

}

return(
  <section>
    <p ref={errorRef} className={errorMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errorMsg}</p>
      <h1>Register</h1>
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
            onFocus={() => setUserFocus(true)}
            onBlur={() => setUserFocus(false)}
            />          
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPwd(e.target.value)}
            value={password}
            required
            onFocus={() => setPwdFocus(true)}
            onBlur={() => setPwdFocus(false)}
          />  
          <label htmlFor="firstname">First Name:</label>
          <input
            type="text"
            id="firstname"
            autoComplete="off"
            onChange={(e) => setFirstname(e.target.value)}
            value={firstname}
            required
            />  
          <label htmlFor="lastname">Last Name:</label>
          <input
            type="text"
            id="lastname"
            autoComplete="off"
            onChange={(e) => setLastname(e.target.value)}
            value={lastname}
            required
          /> 
          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            id="email"
            autoComplete="off"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          /> 
          <label htmlFor="bio">User Bio:</label>
          <input
            type="text"
            id="bio"
            autoComplete="off"
            onChange={(e) => setBio(e.target.value)}
            value={bio}
            required
          /> 
        </form>
  </section>
)
};

export default Register;
