import { useState, useEffect } from "react";
import api from "../../connectionAPI";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export function useAuth() {

    const [authenticated, setAuthenticated] = useState(false);

    const [authenticatedAdmin, setAuthenticatedAdmin] = useState(false);

    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const token = localStorage.getItem('token');

        const tokenConference = async () => {

            if (token) {

                api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;

                setAuthenticated(true);

                await api.get('/decodfy').then((data) => {
                    if (data.data.admin == '1') {
                        setAuthenticatedAdmin(true)
                        
                    }
                }).catch(() => {

                })
            }

        }


        tokenConference();
        setLoading(false);

    }, [])

    const handleLogin = async (email?: string, senha?: string) => {
        await api.post('/login', {
            email: email,
            senha: senha
        }).then((data) => {

            if (!data.data.token)
                return;

            if(data.data.admin == 1){
                setAuthenticatedAdmin(true)
            }else{
                setAuthenticatedAdmin(false)
            }

            localStorage.setItem('token', JSON.stringify(data.data.token));

            api.defaults.headers.Authorization = `Bearer ${data.data.token}`;

            setAuthenticated(true);

            navigate(`${process.env.PUBLIC_URL}/home`);

        }).catch((error) => {
          
            console.log(error)
            Swal.fire({
                icon: 'error',
                title: 'Login invalido...',
                text: 'Email ou senha incorretos, verifique os dados e tente novamente.'
            });


        });
    }

    function handleLogout() {

        localStorage.removeItem('token');

        api.defaults.headers.Authorization = null;

        setAuthenticated(false);

        navigate(`${process.env.PUBLIC_URL}/`);

    }

    if (loading) {
        return <h1>Loading</h1>
    }

    return { authenticated, loading, handleLogin, handleLogout, authenticatedAdmin }
}
