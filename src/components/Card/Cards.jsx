import React,{useState} from 'react';
import styles from './Cards.module.css';
import {fetchedData} from '../../api/fetchWeather';
const Cards = () => {
    const [place,setPlace] = useState("");
    const [weather,setWeather] = useState({});
    const onClick = async () => {
        const data = await fetchedData(place);
        setWeather(data);
        setPlace("");
    }
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <p>Enter a place</p>
                <input type="text" value={place} onChange={(e) => setPlace(e.target.value)}/>
                <button onClick={onClick}>Search</button>            
            {weather.main &&(
                <div className={styles.bottom}>
                    <h1>{weather.name}</h1>
                    <h2>{weather.sys.country}</h2>
                    <div>
                        {Math.round(weather.main.temp)}
                        <sup>&deg;C</sup>
                    </div>
                    <div>
                        <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
                        <p>{weather.weather[0].description}</p>
                    </div>
                </div>
                
            )}
            </div>
        </div>
    )
}
export default Cards;
