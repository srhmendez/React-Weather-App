import React from 'react';
import './weather-day.css';


const WeatherDay = ( {weatherData, city} ) => {


    console.log('in weatherDay Component', weatherData)

    let imagePath0 = weatherData.daily[0].weather[0].icon
    let imagePath1 = weatherData.daily[1].weather[0].icon
    let imagePath2 = weatherData.daily[2].weather[0].icon
    let imagePath3 = weatherData.daily[3].weather[0].icon
    let imagePath4 = weatherData.daily[4].weather[0].icon
    let imagePath5 = weatherData.daily[5].weather[0].icon
    let imagePath6 = weatherData.daily[6].weather[0].icon

    const imageURL0 = `http://openweathermap.org/img/w/${imagePath0}.png`
    const imageURL1 = `http://openweathermap.org/img/w/${imagePath1}.png`
    const imageURL2= `http://openweathermap.org/img/w/${imagePath2}.png`
    const imageURL3 = `http://openweathermap.org/img/w/${imagePath3}.png`
    const imageURL4 = `http://openweathermap.org/img/w/${imagePath4}.png`
    const imageURL5 = `http://openweathermap.org/img/w/${imagePath5}.png`
    const imageURL6 = `http://openweathermap.org/img/w/${imagePath6}.png`

    const cSymbol = '°C';
    // const fSymbol = °F;


    return (
        <div>
            <h2 className='cityName'> { city } </h2>

            <div className='card-container'>
                <div className='card'>
                    <img className='icon' alt='weather-icon' src={ imageURL0 }/>
                    <h3> Temperature: { weatherData.daily[0].temp.day }{ cSymbol }</h3>
                    <p> Weather: { weatherData.daily[0].weather[0].description }  </p>
                </div>

                <div className='card'>
                    <img className='icon' alt='weather-icon' src={ imageURL1 }/>
                    <h3> Temperature: { weatherData.daily[1].temp.day }{ cSymbol }</h3>
                    <p> Weather: { weatherData.daily[1].weather[0].description }  </p>
                </div>

                <div className='card'>
                    <img className='icon' alt='weather-icon' src={ imageURL2 }/>
                    <h3> Temperature: { weatherData.daily[2].temp.day }{ cSymbol }</h3>
                    <p> Weather: { weatherData.daily[2].weather[0].description }  </p>
                </div>

                <div className='card'>
                    <img className='icon' alt='weather-icon' src={ imageURL3 }/>
                    <h3> Temperature: { weatherData.daily[3].temp.day }{ cSymbol }</h3>
                    <p> Weather: { weatherData.daily[3].weather[0].description }  </p>
                </div>

                <div className='card'>
                    <img className='icon' alt='weather-icon' src={ imageURL4 }/>
                    <h3> Temperature: { weatherData.daily[4].temp.day }{ cSymbol }</h3>
                    <p> Weather: { weatherData.daily[4].weather[0].description } </p>
                </div>

                <div className='card'>
                    <img className='icon' alt='weather-icon' src={ imageURL5 }/>
                    <h3> Temperature: { weatherData.daily[5].temp.day }{ cSymbol }</h3>
                    <p> Weather: { weatherData.daily[5].weather[0].description }  </p>
                </div>

                <div className='card'>
                    <img className='icon' alt='weather-icon' src={ imageURL6 }/>
                    <h3> Temperature: { weatherData.daily[6].temp.day }{ cSymbol }</h3>
                    <p> Weather:{ weatherData.daily[6].weather[0].description }  </p>
                </div>
            </div>
        </div>
    ) 
}

export default WeatherDay;
