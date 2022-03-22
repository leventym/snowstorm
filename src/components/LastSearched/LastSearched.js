import { useEffect, useState } from "react";

function LastSearched(props) {
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
      localStorage.getItem(city) === null ||
      localStorage.getItem(city) === ""
    ) {
      localStorage.setItem(city, city);
    }

    getCities();
  }

  return (
    <div>
      <input id="cityText"></input>
      <button id="btn" onClick={addCity}>
        Click here
      </button>
      <ul>
        {cities.map((city) => (
          <li key={city}>{city}</li>
        ))}
      </ul>
    </div>
  );
}

export default LastSearched;
