import LastSearched from "./utils/LastSearched/LastSearched.js";
import React, { useEffect, useState } from "react";

function getCities() {
  let cities = [];
  for (let i = 0; i < localStorage.length; i++) {
    let temp = localStorage.getItem(localStorage.key(i));
    let cityObj = { Key: temp, Value: temp };
    cities.push(cityObj);
  }
  return cities;
}

function addCity() {
  //get city input value
  const city = document.getElementById("cityText").value.trim();

  if (localStorage.getItem(city) == null || localStorage.getItem(city) == "") {
    localStorage.setItem(city, city);
  }

  getCities();
}

function App() {
  const [search, setSearch] = useState([]);
  useEffect(() => {
    setSearch(getCities());
  }, [getCities()]);
  return (
    <div className="App">
      <header className="App-header">
        <input id="cityText"></input>
        <button id="btn" onClick={addCity}>
          Click here
        </button>

        <LastSearched cities={search} />
      </header>
    </div>
  );
}

export default App;
