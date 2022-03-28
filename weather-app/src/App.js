import React from 'react';
import { useEffect, useState } from "react";
import Zip from './Components/Zip';
import './app.css';
import WeatherDay from './Components/WeatherDay';


function App(props) {
    
    const [weatherData, setWeatherData] = useState([]);
    const [lat, setLat] = useState([]);
    const [long, setLong] = useState([]);
    const [city, setCity] = useState([]);


    useEffect(() => {

        const fetchData = async () => {
        
            fetch(`https://api.openweathermap.org/geo/1.0/zip?zip=84106&appid=1bdb1b9f3116ae704ebf5914990f04f2`)
                .then(res => res.json())
                .then(result => {
                    setLat(result.lat);
                    setLong(result.lon);
                    setCity(result.name)
                }).catch(console.error('trouble getting geocoding API data'))
                
            await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=1bdb1b9f3116ae704ebf5914990f04f2`)
                .then(res => res.json())
                .then(result => {
                    setWeatherData(result)
                    console.log(result)
                }).catch(console.error('trouble getting weather data from coordinates'))
        }
        fetchData();

    }, [lat, long]);
        
    return(
        <div>
            <div className='inputs'>
                <Zip className='zip-input' />
            </div>
            <div className='weather-week-container'>
                {(typeof weatherData.daily != 'undefined') ? (
                    <WeatherDay weatherData={weatherData} city={city}/>
                ): (
                    <div className='loading'>Loading...</div>
                )}
            </div>
        </div>
    )
}

export default App;