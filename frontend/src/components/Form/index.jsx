import { useNavigate } from 'react-router-dom';
import { FiUser, FiLock } from 'react-icons/fi';

import styles from './style.module.scss';

const Form = (props) => {
    const navigate = useNavigate()
    return (
        <form className={styles.formAuth} onSubmit={props.submit}>
            <span>{props.title}</span>

            <div>
                <label htmlFor="user"><FiUser
                    size={35}
                    color="#333333"
                />
                </label>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={props.setterEmail}
                />
            </div>
            <div className="input-group">
                <label htmlFor="psw"><FiLock
                    size={35}
                    color="#333333"
                /></label>
                <input
                    type="password"
                    name="psw"
                    placeholder="Senha"
                    onChange={props.setterPassword}
                />
            </div>
            <p onClick={() => navigate('/register')}>{props.toRegister}</p>
            <p onClick={() => navigate('/')}>{props.toLogin}</p>

            <button
                type="submit"
                // onClick={() => navigate(`/${props.navigation}`)}
            >
                {props.buttonText}
            </button>
        </form>
    );
}

export default Form;