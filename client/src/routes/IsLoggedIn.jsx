import { useEffect, useState } from 'react';
import { useAuth } from '../contexts/auth-context';
import { Outlet, Navigate } from 'react-router-dom';

const IsLoggedIn = () => {
    const [ok, setOk] = useState(false);
    const { auth } = useAuth();
    
    useEffect(() => {
        if (auth?.token) {
            setOk(true);
        } else {
            setOk(false);
        }
    }, [auth.token]);
    
    return ok ? <Navigate to="/" /> : <Outlet />;
};

export default IsLoggedIn;
