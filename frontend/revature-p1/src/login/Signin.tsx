import React, { useState } from 'react';

//import { Link } from 'react-router-dom';
//import { useAuth } from '../context/AuthContext';

const Signin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const { login } = useAuth();


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setErrorMessage('');

        const url = "http://localhost:8080/api/auth"; // Adjust URL as needed
        const dto = {
            username: username,
            password: password
        };
        const headers = {
            "Content-Type": "application/json"
        };
        const req = {
            method: "POST",
            body: JSON.stringify(dto),
            headers: headers
        };

        try {
            const response = await fetch(url, req);

            if (response.ok) {
                const contentType = response.headers.get('Content-Type');
                if (contentType && contentType.includes('application/json')) {
                    const responseBody = await response.json();
                    console.log("Login Response Body:", responseBody);
                    login(responseBody); 
                } else {
                    throw new Error('Incorrect response body');
                }
            } else {
                const contentType = response.headers.get('Content-Type');
                if (contentType && contentType.includes('application/json')) {
                    const errorData = await response.json();
                    setErrorMessage(errorData.message || "Client error during login");
                } else {
                    setErrorMessage("Miscellaneous client error during login");
                }
            }
        } catch (error) {
            if (error instanceof Error) {
                setErrorMessage(error.message || "Miscellaneous error has occurred");
            } else {
                setErrorMessage("Miscellaneous error has occurred");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <form className="form-signin" onSubmit={handleSubmit}>
            <h1 className="h2">Enter user credentials</h1>
            <label htmlFor="username" className="sr-only">Username</label>
            <input
                type="text"
                id="username"
                className="form-control"
                placeholder="Username"
                autoComplete='on'
                required
                autoFocus
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="inputPassword" className="sr-only">Password</label>
            <input
                type="password"
                id="inputPassword"
                className="form-control"
                placeholder="Password"
                autoComplete='off'
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
            /*<button className="btn btn-lg btn-primary btn-block" type="submit" disabled={loading}>
                {loading ? "Signing in..." : "Sign in"}
            </button>*/
        </form>
    );
};

export default Signin;