import { useState, useContext } from "react";
import Form from "../../components/Form";
import AuthContext from "../../context/AuthContext";

const Login = () => {
    const { handleLoginContext } = useContext(AuthContext);
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        handleLoginContext(email, password);
    }
    return (
        <Form
            submit={handleLogin}
            title="Login"
            // navigation="home"
            buttonText="Entrar"
            toRegister="Não possui cadastro?"
            setterEmail={(e) => setEmail(e.target.value)}
            setterPassword={(e) => setPassword(e.target.value)}
        />);
}

export default Login;