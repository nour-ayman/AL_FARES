import './LoginForm.css';
import { Link } from 'react-router-dom';
import useLoginForm from '../hooks/useLoginForm'; 
import { AiFillHome } from "react-icons/ai";

const LoginForm = () => {
    const { userRef, errRef, user, setUser, pwd, setPwd, errMsg, success, handleSubmit } = useLoginForm();

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
                    
                    <p className="demo-text">
                        Demo Version
                    </p>  
                    
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>

                    <form onSubmit={handleSubmit}>
                        <label htmlFor="username" className="sr-only">Username:</label>
                        <input
                            type="text"
                            id="username"
                            placeholder="USERNAME"
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
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                            placeholder="PASSWORD"
                        />
                        <button className="retro-btn">LOGIN</button>
                    </form>

                    <div className="retro-footer">
                        <p className="small-text">
                            Don't have an account? <br/>
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
}

export default LoginForm;