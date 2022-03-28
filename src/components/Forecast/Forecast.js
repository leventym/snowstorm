import React, { useState } from "react";
import "./Forecast.css";

export default function Forecast() {
  const key = "GAYJdZs9O3oiKGC0GGeQYkyQE83C06AE";
  const [position, setPosition] = useState([null, null]);
  const [forecast, setForecast] = useState([null, null, null, null, null]);
  let location = "";
  let locationKey = "";

  const getCoordinates = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setPosition([position.coords.latitude, position.coords.longitude]);
    });
  };
  const getLocation = async () => {
    const response = await fetch(
      `http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${key}&q=${position[0]}%2C${position[1]}`
    );
    const data = await response.json();
    location = data.ParentCity.LocalizedName;
    locationKey = data.Key;
    console.log(position);
    console.log(locationKey);
    return locationKey;
  };

  const getForecast = async () => {
    const response = await fetch(
      `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=${key}`
    );
    const data = await response.json();
    setForecast(data.DailyForecasts[0]);
  };

  const getLocalForecast = async () => {
    getCoordinates();
    setTimeout(getLocation, 1500);
    setTimeout(getForecast, 2500);
    console.log(forecast);
  };

  return (
    <div className="local--forecast">
      <button className="local--forecast--btn" onClick={getLocalForecast}>
        Väderleksrapport för din plats
      </button>

      <div className="local--forecast--card"></div>
    </div>
  );
}
