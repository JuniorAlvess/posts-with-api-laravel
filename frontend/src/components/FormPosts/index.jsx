import styles from './style.module.scss'

const FormPosts = (props) => {
    return (
        <form className={styles.formPosts} onSubmit={props.submit}>
            <input type="text" placeholder="Título" />
            <textarea cols="30" rows="5" placeholder="Descrição..." />
            <button type="submit">{props.buttonText}</button>
        </form>
    );
}

export default FormPosts;