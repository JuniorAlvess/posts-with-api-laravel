import { createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

export const AuthContext = createContext({ handleLoginContext: () => { } });

const LoginContextProvider = ({ children }) => {
    const navigate = useNavigate();

    async function handleLoginContext(email, password) {
        try {
            const response = await api.post('/api/login', { email, password });
            if (!response.data.success) {
                alert(response.data.message);
            } else {
                console.log(response.data.message);
                console.log(response.data);
                localStorage.setItem('TOKEN_KEY', response.data)
                navigate('/home')
            }
        } catch (err) {
            console.log('error => ' + err);
        }
    }

    return (
        <AuthContext.Provider value={{ handleLoginContext }}>
            {children}
        </AuthContext.Provider>
    );

}


export { LoginContextProvider };
export default AuthContext;
