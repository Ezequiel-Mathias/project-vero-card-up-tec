import { useState , useEffect } from "react";
import api from "../../connectionAPI";
import { useNavigate } from 'react-router-dom';

interface IAuthProps {
    email : string,
    senha : string
}


export default function useAuth() {
    const [authenticated, setAuthenticated] = useState(false);

    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
            setAuthenticated(true);
        }

        setLoading(false);
    }, [])

    const handleLogin = async (email : string , senha : string) => {
        const data = await api.post('/login', {
            email: email,
            senha: senha
        }).then((data) => {
            localStorage.setItem('token', JSON.stringify(data.data.token));
            api.defaults.headers.Authorization = `Bearer ${data.data.token}`;
            setAuthenticated(true);
            navigate('/home');
        }).catch((error: any) => {
            console.log("LOGIN ERRADOO")
        });
    }

    function handleLogout() {
        localStorage.removeItem('token');
        api.defaults.headers.Authorization = null;
        setAuthenticated(false);
        navigate('/');
    }

    if (loading) {
        return <h1>Loading</h1>
    }

    return {authenticated, loading , handleLogin , handleLogout}
}