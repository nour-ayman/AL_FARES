import { useState, useRef, useEffect } from 'react';

const useSignUpForm = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [matchPwd, setMatchPwd] = useState(''); // New state for confirm password
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    // 1. Focus on the username input when component loads
    useEffect(() => {
        userRef.current.focus();
    }, []);

    // 2. Clear error message when user changes any input
    useEffect(() => {
        setErrMsg('');
    }, [user, pwd, matchPwd]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // 3. Validation: Check if passwords match
        if (pwd !== matchPwd) {
            setErrMsg("Passwords do not match!");
            return;
        }

        // 4. Validation: Check empty fields (optional double-check)
        if (!user || !pwd) {
            setErrMsg("All fields are required.");
            return;
        }

        // 5. Mock API Call (Replace with axios later)
        console.log("Registering User:", user);
        console.log("Password:", pwd);
        
        // Simulating successful registration
        setSuccess(true);
        
        // Clear forms
        setUser('');
        setPwd('');
        setMatchPwd('');
    }

    return {
        userRef,
        errRef,
        user, setUser,
        pwd, setPwd,
        matchPwd, setMatchPwd,
        errMsg,
        success,
        handleSubmit
    };
}

export default useSignUpForm;