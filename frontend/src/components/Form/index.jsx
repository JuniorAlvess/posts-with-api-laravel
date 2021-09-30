import { useNavigate } from 'react-router-dom';
import { FiUser, FiLock } from 'react-icons/fi';

import './style.module.scss';

const Form = (props) => {
    const navigate = useNavigate()
    return (
        <form onSubmit={props.submit}>
            <span>{props.title}</span>

            <div>
                <label htmlFor="user"><FiUser
                    size={35}
                    color="#333333"
                />
                </label>
                <input type="email" name="email" placeholder="Email" />
            </div>
            <div className="input-group">
                <label htmlFor="psw"><FiLock
                    size={35}
                    color="#333333"
                /></label>
                <input type="password" name="psw" placeholder="Senha" />
            </div>
            <p onClick={() => navigate('/register')}>{props.toRegister}</p>

            <button
                type="submit"
                onClick={() => navigate(`/${props.navigation}`)}
            >
                {props.buttonText}
            </button>
        </form>
    );
}

export default Form;