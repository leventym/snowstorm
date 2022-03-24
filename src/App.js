import Forecast from "./components/Forecast/Forecast.js";
import Geolocation from "./components/Geolocation/Geolocation.js";
import LastSearched from "./components/LastSearched/LastSearched.js";
import React from "react";
import "./SearchBar.css"
import SearchBar from "./components/Geolocation/SearchBar";
import Card from "./components/Card/Card";
import BigCities from "./components/BigCities/BigCities";

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Geolocation />
        <SearchBar />
        <Card />
        <LastSearched/>
        </header>
        <div className="cities">
        <BigCities city="Longyearbyen" />
        <BigCities city="London" />
        <BigCities city="Stockholm" />
        <BigCities city="Mumbai" />
        <BigCities city="Hanoi" />
        <BigCities city="Rome" />
        <BigCities city="Berlin" />
    </div>
    </div>
  );
}

export default App;