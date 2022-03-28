import React from "react";

export default function Icons(){
    const time = document.querySelector("img.time");
    const icon = document.querySelector(".icon img");
    
    const [weather, setWeather] = React.useState("");
    
    let timeSrc = weather.IsDayTime ? "../img/day.svg" : "../img/night.svg";
    
return (
    time.setAttribute("src", timeSrc),
    icon.setAttribute("src", `../img/icons/${weather.WeatherIcon}.svg`)
    )}


