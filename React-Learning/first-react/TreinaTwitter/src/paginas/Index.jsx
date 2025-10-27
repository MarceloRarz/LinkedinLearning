import TextInput from "../componentes/TextInpult";
import Tweet from "../componentes/Tweet";
import styles from './index.module.css';
import { userIndex } from "../hooks/useIndex.page";

export default function Index() {

    const {text, maxLength, twitterList, onTextChange, sendTwitter} = userIndex();

    return (
        <div>
            <h1 className={styles.pageTitle}>TreinaTwitter</h1>
            <div className={styles.tweetContainer}>
                <img className={styles.avatar} src={'https://github.com/MarceloRarz.png'} alt="Foto de Perfil" width={50} height={50}/>
                <TextInput
                    placeholder={'O que está acontecendo?'}
                    maxLength={maxLength}
                    value={text}
                    onChange={onTextChange}
                />
            </div>
            <div className={styles.buttonContainer}>
                <div>{text.length} / {maxLength}</div>
                <button 
                    className={styles.postButton} 
                    disabled={text.length === 0}
                    onClick={sendTwitter}
                >
                    Tweetar                    
                </button>   
            </div>
            <ul className={styles.tweetList}>
                 {twitterList.map((tweet, index) => {
                    return (
                    <li className={styles.tweetListItem} key={index}>
                        <Tweet tweet={tweet} />
                    </li>                        
                    )
                 })}
            </ul>
        </div>
    );
}