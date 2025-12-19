import './LoginForm.css';
import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';
import { AiFillHome } from "react-icons/ai";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";

const LoginForm = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrMsg('');

        try {
            const userCredential = await signInWithEmailAndPassword(
                auth,
                user,   // email
                pwd     // password
            );

            console.log("Logged in:", userCredential.user);
            setSuccess(true);

        } catch (err) {
            setErrMsg(err.message);
            errRef.current.focus();
        }
    };

    return (
        <div className="login-wrapper">
            {success ? (
                <section className="login-card">
                    <h1 className="retro-title success-msg">LOGGED IN!</h1>
                    <br />
                    <p>
                        <Link to="/home" className="home-link">
                            <AiFillHome size={40} />
                            <span>HOME</span>
                        </Link>
                    </p>
                </section>
            ) : (
                <section className="login-card">
                    <h1 className="retro-title">AL FARES</h1>

                    <p className="demo-text">Demo Version</p>

                    <p
                        ref={errRef}
                        className={errMsg ? "errmsg" : "offscreen"}
                        aria-live="assertive"
                    >
                        {errMsg}
                    </p>

                    <form onSubmit={handleSubmit}>
                        <label htmlFor="username" className="sr-only">Username:</label>
                        <input
                            type="text"
                            id="username"
                            placeholder="EMAIL"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                        />

                        <label htmlFor="password" className="sr-only">Password:</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="PASSWORD"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                        />

                        <button className="add-btn">LOGIN</button>
                    </form>

                    <div className="retro-footer">
                        <p className="small-text">
                            Don't have an account? <br />
                            <Link to="/signup" className="retro-link highlight">SIGN UP</Link>
                        </p>

                        <span className="line">
                            <Link to="/AboutUs" className="retro-link">ABOUT US</Link>
                        </span>
                    </div>
                </section>
            )}
        </div>
    );
};

export default LoginForm;
