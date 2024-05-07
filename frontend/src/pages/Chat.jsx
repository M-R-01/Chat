import React, { useState, useEffect } from "react";
import styles from './chat.module.css'
import { useLocation } from "react-router-dom";
import axios from "axios";
import { SlArrowUp } from "react-icons/sl";

const Chat = () => {
    const [messages, setMessages] = useState([])
    const location = useLocation();
    const user = location.state.id;
    const [content, setContent] = useState('')
    const time = new Date();

    useEffect(() => {
        axios.get('http://localhost:3000/chat')
             .then((res) => {
                setMessages(res.data.text)
             })
             .catch((err) => {
                console.log(err)
             })
    })

    const handleMessage = () => {
        const message = {
            user, content, time
        }
        axios.post('http://localhost:3000/chat', message)
    }


    return(
        <div className={styles.chat}>
        <div className={styles.messagebox}>
            {messages.map((message) => (
                <div key={message._id} className={styles.message}>
                <div className={styles.info}>
                    <div className={styles.user}>{message.user}</div>
                </div>    
                <div className={styles.content}>{message.content}</div>                
            </div>
            ))}
            
        </div>
        
        <div className={styles.inputfield}>
            <input type="text" id="content" onChange={(e) => { setContent(e.target.value) }} placeholder="Type your message..." />
            <button onClick={handleMessage}><SlArrowUp /></button>
        </div>
    </div>
    )
}

export default Chat;