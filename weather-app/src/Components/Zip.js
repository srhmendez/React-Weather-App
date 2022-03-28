import React, { useState } from 'react';
import './inputs.css';
import mapIcon from '../images/maps-and-flags.png';


const Zip = () => {

    const [zipCode, setZip] = useState('');

    const zipCodeChangeHandler = (event) => {
        setZip(event.target.value);
        console.log(zipCode) 
    };

    const submitHandler = (event) => {
        event.preventDefault();

        console.log(zipCode)
    }
    
    
    return(
        <div>
            <form onSubmit={submitHandler}>
                <label>
                    <span className='zip-code-label'>Zip Code</span>
                    <img className='map-icon' src={mapIcon} alt='map icon'/>
                </label>
                <input onChange={zipCodeChangeHandler} id='zip-input' minLength="5"></input>
                <button className="enter-zip-btn" type="submit">Get Weather</button>
            </form>
        </div>
    )
}

export default Zip;
