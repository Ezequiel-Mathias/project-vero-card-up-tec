import { createContext} from 'react';
import {useAuth} from './hooks/UseAuth';

const Context = createContext({});

function AuthProvider({ children }: any) {

    const {authenticated, loading , handleLogin , handleLogout} : any = useAuth();

    return (
        <Context.Provider value={{ loading, authenticated, handleLogin , handleLogout }}>
            {children}
        </Context.Provider>
    );
}

export { Context, AuthProvider }

