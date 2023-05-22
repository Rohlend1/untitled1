import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

const Home = () => {
    const [dictionaries, setDictionaries] = useState([]);

    const fetchDictionaries = async () => {
        try {
            const response = await axios.get('http://localhost:8080/home');
            setDictionaries(response.data);
        } catch (error) {
            console.error('Ошибка при получении данных словарей:', error);
        }
    };

    useEffect(() => {
        fetchDictionaries();
    }, []);

    return (

        <div className="container">
            <h1 className="title">Словари пользователя</h1>

            {dictionaries.words && dictionaries.words.length > 0 ? (
                <div className="dictionary-section">
                    <h2 className="dictionary-name">{dictionaries.name}</h2>
                    <ul className="word-list">
                        {dictionaries.words.map((word) => (
                            <li key={word.value} className="word-item">
                                <strong className="word-value">{word.value}:</strong> {word.translate}
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <p>Загрузка данных...</p>
            )}
        </div>
    );
};

export default Home;
