import './SignUpForm.css';
import { Link } from 'react-router-dom';
import { AiFillHome } from "react-icons/ai";
import useSignUpForm from '../hooks/useSignUpForm'; 

const SignUpForm = () => {
    const { 
        userRef, 
        errRef, 
        user, setUser, 
        pwd, setPwd, 
        matchPwd, setMatchPwd, 
        errMsg, 
        success, 
        handleSubmit 
    } = useSignUpForm();

    return (
        <div className="signup-wrapper">
            {success ? (
                <section className="signup-card">
                    <h1 className="retro-title success-msg">ACCOUNT CREATED!</h1>
                    {/* <p className="demo-text"></p> */}
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

                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>

                    <form onSubmit={handleSubmit}>
                        {/* Username Input */}
                        <label htmlFor="username" className="sr-only">Username:</label>
                        <input
                            type="text"
                            id="username"
                            placeholder="CHOOSE USERNAME"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                        />

                        {/* Password Input */}
                        <label htmlFor="password" className="sr-only">Password:</label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                            placeholder="PASSWORD"
                        />

                        {/* Confirm Password Input */}
                        <label htmlFor="confirm_pwd" className="sr-only">Confirm Password:</label>
                        <input
                            type="password"
                            id="confirm_pwd"
                            onChange={(e) => setMatchPwd(e.target.value)}
                            value={matchPwd}
                            required
                            placeholder="CONFIRM PASSWORD"
                        />

                        <button className="retro-btn">REGISTER</button>
                    </form>

                    <div className="retro-footer">
                        <p className="small-text">
                            Already have an account? <br/>
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
}

export default SignUpForm;