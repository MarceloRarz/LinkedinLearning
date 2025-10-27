//import React, { useState, useRef } from 'react';
import styles from './TextInput.module.css';

// export default function TextInput(){
//     return (
//         <div>
//             <textarea 
//             placeholder={'O que está acontecendo?'} 
//             maxLength={125}>                
//             </textarea>
//         </div>
//     );
// }


// export default function TextInput(props){
//     return (
//         <div>
//             <textarea 
//             placeholder={props.placeholder} 
//             maxLength={props.maxLength}        
//             </textarea>
//         </div>
//     );
// }


// export default function TextInput(placeholder, maxLength, ...props){
//     return (
//         <div>
//             <textarea 
//             placeholder={placeholder} 
//             maxLength={maxLength}        
//             value={props.value}
//             >
//             </textarea>
//         </div>
//     );
// }

//export default function TextInput({placeholder = 'O que está acontecendo?', maxLength, ...props}){
export default function TextInput(props){    
    // const [text, setText] = useState('');
    // const imputElement = useRef(null);
    // const [twitterList , setTwitterList] = useState([]);

    // function onTextChange(event){
    //     const text = event.target.value;

    //     if (text.length <= maxLength) {
    //         setText(text);
    //     }
    // }

    // function sendTwitter(event){
    //     setTwitterList([...twitterList, text]);
    //     setText('');
    // }

    // console.log(imputElement.current.value);

    return (
        <div>
            {/* <textarea 
            className={styles.input}
            placeholder={placeholder} 
            maxLength={maxLength}                    
            {...props}
            onChange={onTextChange}
            ref={imputElement}
            >
            </textarea> */}
            <textarea 
            className={styles.input}            
            {...props}
            >
            </textarea>
            {/*
            <p>{text.length}/{maxLength}</p>
             <button onClick={() => console.log(imputElement.current.value)}>Gerar Log</button> 
            <button className={styles.button} onClick={sendTwitter}>Tweetar</button>   

            {twitterList.map(twitter => {
                return(
                    <p>{twitter}</p>
                )
            })}



            <ul>
                 {twitterList.map((tweet, index) => (
                    <li key={index}>{tweet}</li>
                ))}

            </ul>

            */}
        </div>
    );
}