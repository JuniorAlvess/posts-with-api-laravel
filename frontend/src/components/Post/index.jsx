import { FiEdit, FiTrash2 } from 'react-icons/fi';

import styles from './style.module.scss';

const Post = (props) => {
    return (
        <section>
            <div className={styles.postGroup}>
                <span>{props.title}</span>
                <div className={styles.icons}>
                    <FiEdit
                        className="icon"
                        title="Editar publicação?"
                        size={20}
                        color="#71C9CE"
                    />
                    <FiTrash2
                        className="icon"
                        title="Excluir publicação?"
                        size={20}
                        color="#FF0000"
                    />
                </div>
            </div>
            <article>
                <p>{props.description}</p>
            </article>
        </section>
    );
}

export default Post;