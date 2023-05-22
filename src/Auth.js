import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/login', { username, password });
            console.log(response.data);
        } catch (error) {
            console.error('Ошибка при авторизации:', error);
        }
    };

    return (
        <div className="login-container">
            <h1>Авторизация</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input type="text" placeholder="Имя пользователя" value={username} onChange={handleUsernameChange} />
                </div>
                <div className="form-group">
                    <input type="password" placeholder="Пароль" value={password} onChange={handlePasswordChange} />
                </div>
                <button type="submit">Войти</button>
            </form>
        </div>
    );
};

export default Login;
