import React, { useState } from "react";
import "./SearchBar.css";
import Card from "../Card/Card";

function SearchBar(props) {
  const [searchthis, setSearchthis] = useState("");
  const [theCity, setTheCity] = useState([]);
  const [cities, setCities] = useState([]);

  const [temperature, setTemperature] = React.useState("");
  const [weatherText, setweatherText] = React.useState("");
  const [weatherIcon, setWeatherIcon] = React.useState("");
  const [isDayTime, setIsDayTime] = React.useState("");

  React.useEffect(() => {
    getCities();
  }, []);

  function getCities() {
    let temp = [];
    for (let i = 0; i < localStorage.length; i++) {
      let cityObj = localStorage.getItem(localStorage.key(i));
      temp.push(cityObj);
    }
    setCities(temp);
  }

  const getWeather = async (id) => {
    const base = "http://dataservice.accuweather.com/currentconditions/v1/";
    const query = `${id}?apikey=${props.apiKey}`;

    const response = await fetch(base + query);
    const data = await response.json();
    setWeatherIcon(data[0].WeatherIcon);
    setIsDayTime(data[0].IsDayTime);
    setTemperature(data[0].Temperature.Metric.Value);
    setweatherText(data[0].WeatherText);
    return data[0];
  };

  const getCity = async (city) => {
    const base =
      "http://dataservice.accuweather.com/locations/v1/cities/search";
    const query = `?apikey=${props.apiKey}&q=${city}`;

    const response = await fetch(base + query);
    const data = await response.json();
    setTheCity(data[0].LocalizedName);
    console.log("thecity is: ", theCity);
    return data[0];
  };

  function addCity() {
    const city = document.getElementById("cityText").value.trim();
    if (
      localStorage.getItem(city) === null ||
      localStorage.getItem(city) === ""
    ) {
      localStorage.setItem(city, city);
    }
    console.log(city);
    getCities();
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(searchthis);
    getCity(searchthis)
      .then((data) => {
        return getWeather(data.Key);
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
        <input
          id="cityText"
          type="text"
          value={searchthis}
          onChange={(e) => setSearchthis(e.target.value)}
        />
        <button
          id="btn"
          className="btn"
          type="submit"
          value="Submit"
          onClick={addCity}
        >
          Sök
        </button>
      </form>

      <div className="flexbox-container">
        <Card
          weatherIcon={weatherIcon}
          isDayTime={isDayTime}
          city={theCity}
          temperature={temperature}
          weatherText={weatherText}
        />

        <ul>
          <b>Senaste sökningar</b>
          {cities.map((city) => (
            <li
              key={city}
              onClick={(city) => {
                localStorage.removeItem(city.target.innerText);
                getCities();
              }}
            >
              {city}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SearchBar;
