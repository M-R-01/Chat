import React from "react";
import styles from './login.module.css';
import axios from 'axios';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [code, setCode] = useState('')

    const handleLogin = (e) => {
        e.preventDefault()
        const data = {
            name, code
        }

        axios.post('http://localhost:3000/', data)
             .then((res) => {
                if (res.data =='exist') {
                    console.log(res)
                    navigate('/chat', {state:{id:name}})
                }
                else {
                    console.log('notworking')
                }
             })
    }

    return(
        <div className={styles.container}>
            <div className={styles.login}>
                Welcome
                    <input id="name" type="text" onChange={(e) => { setName(e.target.value) }} className={styles.input} placeholder="Name" />
                    <input id="code" type="text" onChange={(e) => { setCode(e.target.value) }} className={styles.input} placeholder="Code" />
                    <button type="submit" onClick={handleLogin}>Submit</button>
            </div>
        </div>
    )
}

export default Login;