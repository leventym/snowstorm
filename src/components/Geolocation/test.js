import React, { useEffect, useState } from "react";
import './Geolocation.css';


const Geolocation = (props) => {

    const key = 'GAYJdZs9O3oiKGC0GGeQYkyQE83C06AE';

let lat = 0;
let long = 0;
let location = '';
let locationKey = '';

useEffect(function() {
    navigator.geolocation.getCurrentPosition((position) =>{
        lat = position.coords.latitude;
        long = position.coords.longitude;
      
        console.log(`${lat}, ${long}  --- getCoordinates`);  
        return ([lat, long]); 
}, [])


const getCoordinates = () => {

    navigator.geolocation.getCurrentPosition((position) =>{
    lat = position.coords.latitude;
    long = position.coords.longitude;
  
    console.log(`${lat}, ${long}  --- getCoordinates`);  
    return ([lat, long]);
  })  
};

// getCoordinates();

const getLocation = async () => {
    
//   if(lat !== 0 && long !==0){
  //får inte köras förrän getLocation har körts
//   console.log(p[0], p[1]);  

    const response = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${key}&q=${lat}%2C${long}`);
    const data = await response.json();
    location = data.ParentCity.LocalizedName;
    locationKey = data.Key;
    console.log("getLocation");  
    // console.log(location);
    // console.log(locationKey);
    return locationKey;
//   }
//   else{
//     console.log("Koordinaterna har inte laddats in än, försök igen.");
//   }
};

let locKey = 0;
const getLocationTEST = async () => {
    
    getCoordinates();
    locKey = getLocation();
    // getLocation();
    // getLocalWeather();
    // console.log(locKey);
    // return locKey;
    const response = await fetch(`http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${key}`);
  const data = await response.json();
  console.log(data[0].Weathertext);
  return console.log(data[0]);
}

// const [coords, setCoords] = useState(() => getCoordinates()); 

const getLocalWeather = async () => {
    
    getLocationTEST();
    console.log(locKey);
    // const locKey = getLocation();
//   const response = await fetch(`http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${key}`);
//   const data = await response.json();
//   console.log(data[0].Weathertext);
//   return console.log(data[0]);
  
};

    return (
        <div className="geolocation">
    <button className="geo-button" onClick={getLocalWeather}>Där du är</button>
    </div>
    )
};

export default Geolocation;