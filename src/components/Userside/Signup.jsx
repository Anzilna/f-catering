import axios from 'axios';
import './Signup.css';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import baseUrl from '../../Api';

const Signup = () => {
    const history = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    async function submit(e) {
        e.preventDefault();

        try {
            const response = await axios.post(baseUrl + "/signup", {
                email,
                password
            });

            if (response.data === "exist") {
                setMessage("User already exists");
            } else if (response.data === "notexist") {
                setMessage("Registered successfully");
                history("", { state: { id: email } });
            } else {
                setMessage("Something went wrong");
            }
        } catch (error) {
            console.error(error);
            setMessage("Something went wrong");
        }
    }

    return (
        <div className='container'>
            <h1>Signup</h1><br />
            <form onSubmit={submit}>
                Email<br />
                <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder='Email' /><br />
                Password<br />
                <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder='Password' /><br />
                <br /><input type="submit" value="Register" />
            </form>
            <br />

            {message && <p>{message}</p>}

            <p>Already have an account?
                <div className="link">
                    <Link to="/userlogin">Login</Link>
                </div>
            </p>
        </div>
    );
}

export default Signup;
