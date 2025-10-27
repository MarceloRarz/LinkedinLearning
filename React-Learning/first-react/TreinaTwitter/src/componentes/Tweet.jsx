import styles from './Tweet.module.css';
import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export default function Tweet({tweet}){
    const PublicadoAteAgora = formatDistanceToNow(new Date(tweet.data), {addSuffix: true, locale: ptBR,});

    return (
        <div className={styles.tweetContainer}>
            <img 
                className={styles.avatar} 
                src={tweet.usuario.avatar} 
                alt="Foto de Perfil" 
                width={50} 
                height={50}
            />
            <div className={styles.user}>
                <span className={styles.userName}>{tweet.usuario.nome}</span>
                <span className={styles.userUserName}>{tweet.usuario.username}</span>
                <span className={styles.date}> - {PublicadoAteAgora}</span>
            </div>
            <div className={styles.tweetText}>
                {tweet.texto}
            </div>
        </div>
    )
}