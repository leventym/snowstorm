import React, {useEffect, useState} from "react";
import './Geolocation.css';

export default function Geolocation(props) {    
    const [pos, setPos] = useState([null, null])
    const [localWeather, setLocalWeather] = useState({});  
    const [location, setLocation] = useState('');    
    let locationKey = '';  
    
    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) =>{
            setPos([position.coords.latitude, position.coords.longitude])
        })
    }, []);

    const getLocation = async () => {  
            const response = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${props.apiKey}&q=${pos[0]}%2C${pos[1]}`);
            const data = await response.json();
            console.log(data);
            console.log(pos[0], pos[1]);
            setLocation(data.LocalizedName);
            locationKey = data.Key;
            console.log(locationKey);
            return locationKey;
        };
    
    const getWeather = async () => {
        const response = await fetch(`http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${props.apiKey}`);
        const data = await response.json();
        setLocalWeather(data[0]);
    }

    const getLocalWeather = async () => {
        await getLocation();
        await getWeather();
        console.log(localWeather);
    }
        
    return (
        <div className="geo">
            <div className="geo--card">
                <button className="geo--btnn" onClick={getLocalWeather}>Nuvarande position</button>
                <h5>{location}</h5>
                {localWeather.WeatherText ? <h5>{localWeather.WeatherText}</h5> : null}
                {localWeather.WeatherText ? <p>{localWeather.Temperature.Metric.Value} °C</p> : null}
            </div>
        </div>
        )
    }
