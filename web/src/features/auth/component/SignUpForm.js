import './SignUpForm.css';
import { Link } from 'react-router-dom';
import { AiFillHome } from "react-icons/ai";
import { useState, useRef } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../../../firebase";

const SignUpForm = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [matchPwd, setMatchPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrMsg('');

        if (pwd !== matchPwd) {
            setErrMsg("Passwords do not match");
            errRef.current.focus();
            return;
        }

        try {
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                user, // email
                pwd
            );

            // 🔥 SAVE USER DATA TO FIRESTORE
            await setDoc(doc(db, "users", userCredential.user.uid), {
                email: user,
                createdAt: new Date()
            });

            console.log("User registered:", userCredential.user);
            setSuccess(true);

        } catch (err) {
            setErrMsg(err.message);
            errRef.current.focus();
        }
    };

    return (
        <div className="signup-wrapper">
            {success ? (
                <section className="signup-card">
                    <h1 className="retro-title success-msg">ACCOUNT CREATED!</h1>
                    <br />
                    <p>
                        <Link to="/" className="home-link">
                            <AiFillHome size={40} />
                            <span>GO TO LOGIN</span>
                        </Link>
                    </p>
                </section>
            ) : (
                <section className="signup-card">
                    <h1 className="retro-title">AL FARES</h1>

                    <p className="demo-text">create your own account</p>

                    <p
                        ref={errRef}
                        className={errMsg ? "errmsg" : "offscreen"}
                        aria-live="assertive"
                    >
                        {errMsg}
                    </p>

                    <form onSubmit={handleSubmit}>
                        {/* Username Input */}
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

                        <label htmlFor="confirm_pwd" className="sr-only">Confirm Password:</label>
                        <input
                            type="password"
                            id="confirm_pwd"
                            placeholder="CONFIRM PASSWORD"
                            onChange={(e) => setMatchPwd(e.target.value)}
                            value={matchPwd}
                            required
                        />

                        <button className="retro-btn">REGISTER</button>
                    </form>

                    <div className="retro-footer">
                        <p className="small-text">
                            Already have an account? <br />
                            <Link to="/" className="retro-link highlight">LOGIN HERE</Link>
                        </p>

                        <span className="line">
                            <Link to="/AboutUS" className="retro-link">ABOUT US</Link>
                        </span>
                    </div>
                </section>
            )}
        </div>
    );
};

export default SignUpForm;
