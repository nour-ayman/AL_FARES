import { useState, useRef, useEffect } from 'react';

const useLoginForm = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    // Focus on username input when component loads
    useEffect(() => {
        userRef.current.focus();
    }, []);

    // Clear error message when user starts typing again
    useEffect(() => {
        setErrMsg('');
    }, [user, pwd]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // --- AUTHENTICATION LOGIC START ---
        
        // 1. Define the allowed usernames and the master password
        const allowedUsers = ['wezza', 'aasem', 'hamza'];
        const masterPassword = 'abcd@1234';

        // 2. Check credentials
        // We convert input to lowercase so 'Wezza' and 'wezza' both work
        if (allowedUsers.includes(user.toLowerCase()) && pwd === masterPassword) {
            setUser('');
            setPwd('');
            setSuccess(true);
        } else {
            setErrMsg('Invalid Username or Password');
            // Focus the error message for accessibility
            if(errRef.current) errRef.current.focus();
        }
        
        // --- AUTHENTICATION LOGIC END ---
    }

    return { 
        userRef, 
        errRef, 
        user, 
        setUser, 
        pwd, 
        setPwd, 
        errMsg, 
        success, 
        handleSubmit 
    };
}

export default useLoginForm;