import React, { useState } from 'react';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [bio, setBio] = useState('');
}

const signin = async(e) => {
    const url = "http://localhost8080/user";
    const headers = {
        "Content-Type": "application/json"
    };
    const credentials = {
        username : username,
        password : password
    };

    const requestType = {
        method: "POST",
        body: JSON.stringify(credentials),
        headers: headers
    };
    try{
        const response = await(url, request);
        const responseBody = await response(json);
    }
    catch(err){
        console.log("Error has occurred: ", err);
    }

    return (
        <div className = "User Credentials">
            <form onSubmit={confirm}// bind to java project
            <h1 className="h2 text-center">Register</h1>
            <input 
                type="text" 
                id="fname" 
                className="form-control" 
                placeholder="First Name" 
                //autoComplete='on'
                required 
                value={fname} 
                onChange={(e) => setFname(e.target.value)} 
            />
            <input 
                type="text" 
                id="lname" 
                className="form-control" 
                placeholder="Last Name" 
                required 
                value={lname} 
                onChange={(e) => setLname(e.target.value)} 
            />
            <input 
                type="email" 
                id="email" 
                className="form-control" 
                placeholder="Last Name" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
            />
            <input 
                type="text" 
                id="username" 
                className="form-control" 
                placeholder="Last Name" 
                required 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
            />
            <input 
                type="password" 
                id="password" 
                className="form-control" 
                placeholder="Last Name" 
                required 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
            />
            <input 
                type="text" 
                id="bio" 
                className="form-control" 
                placeholder="Last Name" 
                value={bio} 
                onChange={(e) => setBio(e.target.value)} 
            />
            <button type = "submit">
                Sign up
            </button>
            </form>
        </div>
    );

};

export default Register;
