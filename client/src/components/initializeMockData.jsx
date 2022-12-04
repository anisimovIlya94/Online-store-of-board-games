import React from 'react';
import useMockData from '../utils/mockData';

const InitializeData = () => {
    const { error, initialize, progress, status } = useMockData();
    const handleClick = () => {
        initialize();
    };
    return (
        <div className="conteiner mt-5">
            <h3>Инициализация данных в FireBase</h3>
            <ul>
                <li>Status: {status}</li>
                <li>Progress: {progress}%</li>
                {error && <li>Error: {error}</li>}
            </ul>
            <button className="btn btn-primary" onClick={handleClick}>Инициализировать</button>
        </div>
    );
}
 
export default InitializeData;