import React from "react";

export default function Icons(){
    const time = document.querySelector("img.time");
    const icon = document.querySelector(".icon img");

    /*
    const updateUI = (data) => {
      
        const weather = data.weatherDetails;
        let timeSrc = weather.IsDayTime ? "../img/day.svg" : "../img/night.svg";

      }; */
    
    const [weather, setWeather] = React.useState("");
    
    let timeSrc = weather.IsDayTime ? "../img/day.svg" : "../img/night.svg";

    //const weatherIcon = 3;

    //update weather icon image
    //const iconSource = `img/icons/${weather.WeatherIcon}.svg`;

    //update day/night image
    //let timeSource = weather.IsDayTime ? "img/day.svg" : "img/night.svg";

    //let timeS = "img/day.svg";

    
return (
    time.setAttribute("src", timeSrc),
    icon.setAttribute("src", `../img/icons/${weather.WeatherIcon}.svg`)

    //<img src={`./img/icons/${weatherIcon}.svg`} alt='weather icon' className='test'/>


)}


