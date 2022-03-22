import LastSearched from "./utils/LastSearched/LastSearched.js";
import React, { useEffect, useState } from "react";

function App() {
  const [cities, setCities] = useState([]);

  useEffect(() => {
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

  function addCity() {
    //get city input value
    const city = document.getElementById("cityText").value.trim();

    if (
      localStorage.getItem(city) == null ||
      localStorage.getItem(city) == ""
    ) {
      localStorage.setItem(city, city);
    }

    getCities();
  }

  return (
    <div className="App">
      <header className="App-header">
        <input id="cityText"></input>
        <button id="btn" onClick={addCity}>
          Click here
        </button>

        <LastSearched cities={cities} />
      </header>
    </div>
  );
}

export default App;
