import { useState, useRef, useEffect } from 'react';

const useLoginForm = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (user === '' || pwd === '') {
            setErrMsg("Missing Username or Password");
            return;
        }

        console.log("Submitted:", user, pwd);
        setUser('');
        setPwd('');
        setSuccess(true);
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
