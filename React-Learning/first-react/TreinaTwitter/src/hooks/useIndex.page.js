import { useState } from "react";

export function userIndex() {

    const [text, setText] = useState('');    
    const maxLength = 125;
    const [twitterList , setTwitterList] = useState([]);
    const tweet = {
        data: new Date(),
        texto: text,
        usuario: {
            nome: 'Marcelo Rarz',
            username: 'MarceloRarz',
            avatar: 'https://github.com/MarceloRarz.png'
        }
    }

    function onTextChange(event){
        const text = event.target.value;

        if (text.length <= maxLength) {
            setText(text);
        }
    }

    function sendTwitter(){
    setTwitterList([...twitterList, tweet]);
    setText('');
    }

    return {text, maxLength, twitterList, onTextChange, sendTwitter};

}