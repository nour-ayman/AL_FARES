import './LoginForm.css';
import { Link } from 'react-router-dom';
import useLoginForm from '../hooks/useLoginForm'; // adjust path if needed

const LoginForm = () => {
    const { userRef, errRef, user, setUser, pwd, setPwd, errMsg, success, handleSubmit } = useLoginForm();

    return (
        <div className="login-wrapper">
            {success ? (
                <section>
                    <h1>You are logged in!</h1>
                    <br />
                    <p>
                        <Link to="HomePage">Go to Home</Link>
                    </p>
                </section>
            ) : (
                <section>
                    <h1 style={{ textAlign: 'center', marginBottom: '1rem'}}>AL FARES</h1>
                    <p style={{ textAlign: 'center', fontSize: '0.8rem', color: '#ccc', marginBottom: '10px', marginTop: '-10px' }}>
                        Demo / Test Version
                    </p>  
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>

                    <form onSubmit={handleSubmit}>
                        <label htmlFor="username" className="sr-only">Username:</label>
                        <input
                            type="text"
                            id="username"
                            placeholder="Username"
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
                            placeholder="Password"
                        />
                        <button>Login</button>
                    </form>

                    <span className="line" style={{display: 'flex', justifyContent: 'center', marginTop: '1rem'}}>
                        <Link to="AboutUs" style={{marginLeft: '5px', fontWeight: 'bold'}}>About Us</Link>
                    </span>
                </section>
            )}
        </div>
    );
}

export default LoginForm;
