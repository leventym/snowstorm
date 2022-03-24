import React, {useState } from "react";
import "./SearchBar.css";

function SearchBar() {
    const [searchthis, setSearchthis] = useState("");
    const [theCity, setTheCity] = useState([]);


  const [temperature, setTemperature] = React.useState("");
  const [weatherText, setweatherText] = React.useState("");

  const key = 'uGYj8gGU9BjRuipw5wuk5noJmJvB8ZsW'


  const getWeather = async (id) => {
  const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
  const query = `${id}?apikey=${key}`;
    
  const response = await fetch(base + query);
  const data = await response.json();
  setTemperature(data[0].Temperature.Metric.Value);
  setweatherText(data[0].WeatherText);
        return data[0]


    }

    
    const getCity = async (city) => {
        const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
        const query = `?apikey=${key}&q=${city}`;
    
        const response = await fetch(base + query);
        const data = await response.json();
        
        setTheCity(data[0].AdministrativeArea.LocalizedName)
        console.log("thecity is: ", theCity)
        return data[0]
    };

    function handleSubmit(event) {
        event.preventDefault();
        console.log(searchthis)
            getCity(searchthis).then(data => {
                return getWeather(data.Key)
            }).then(data => {
                console.log(data)
            })
            .catch(err => console.log(err))
    }

   return (

        <div className='search'> 
            <form onSubmit={handleSubmit}>
                <input type="text" value={searchthis} onChange={e => setSearchthis(e.target.value)} />
                <button className="btn" type="submit" value="Submit">Sök</button>
            </form>
                {temperature && <h2>{theCity}</h2>}
                {temperature && <p className="temperature">{temperature} °C</p>}
                {temperature && <p className="weatherText">{weatherText}</p>}
        </div>
    )
}

export default SearchBar