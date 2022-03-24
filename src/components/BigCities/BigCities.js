import React from "react";
import './BigCities.css'

export default function BigCities(props) {
  const [city, setCity] = React.useState("");
  const [tempBigCity, setTempBigCity] = React.useState("");
  const [conditonBigCity, setConditonBigCity] = React.useState("");

  async function searchCity() {
    const response = await fetch(
      `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${props.apiKey}&q=${props.city}`
    );
    const data = await response.json();
    const cityKey = data[0].Key;
    setCity(data[0].LocalizedName);

    const weatherResponse = await fetch(
      `http://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=${props.apiKey}`
    );
    const weatherData = await weatherResponse.json();
    const weather = weatherData[0];
    setTempBigCity(weather.Temperature.Metric.Value);
    setConditonBigCity(weather.WeatherText);
  }
  React.useEffect(function () {
    searchCity();
  }, []);

  return (
    <div className="bigCities">
      <p className="cityName">{city}</p>
      <p className="temp">{tempBigCity} °C</p>
      <p className="condition">{conditonBigCity}</p>
    </div>
  );
}
