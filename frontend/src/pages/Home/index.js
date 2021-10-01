import FormPosts from "../../components/FormPosts";
import Post from "../../components/Post";

import styles from './style.module.scss'

const Home = () => {
    return (
        <main className={styles.container}>
            <FormPosts
                buttonText="Publicar"
            />
            <Post
                title="Título"
                description="Mussum Ipsum, cacilds vidis litro abertis. Diuretics paradis num copo é motivis de denguis. 
                Quem manda na minha terra sou euzis! Atirei o pau no gatis, per gatis num morreus. Leite de capivaris, 
                leite de mula manquis sem cabeça.
                "
            />
            <Post
                title="Título"
                description="Mussum Ipsum, cacilds vidis litro abertis. Diuretics paradis num copo é motivis de denguis. 
                Quem manda na minha terra sou euzis! Atirei o pau no gatis, per gatis num morreus. Leite de capivaris, 
                leite de mula manquis sem cabeça.
                "
            />
            <Post
                title="Título"
                description="Mussum Ipsum, cacilds vidis litro abertis. Diuretics paradis num copo é motivis de denguis. 
                Quem manda na minha terra sou euzis! Atirei o pau no gatis, per gatis num morreus. Leite de capivaris, 
                leite de mula manquis sem cabeça.
                "
            />
        </main>
    );
}

export default Home;