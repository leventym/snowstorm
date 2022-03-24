import React from "react";
import SearchBar from "../Searchbar/SearchBar";
import BigCities from "../BigCities/BigCities";
import Geolocation from "../Geolocation/Geolocation";

function HeadComponent() {

    const apiKey = 'asYR1vouPBrsWDLvHuxRw55envEYujJ5'
    
      return (
        <div className="App">
          <header className="App-header">
            <Geolocation 
            apiKey={apiKey}/>
            <SearchBar 
            apiKey={apiKey}/>
            </header>
            <div className="cities">
            <BigCities city="Longyearbyen" 
            apiKey={apiKey}/>
            <BigCities city="London" 
            apiKey={apiKey}/>
            <BigCities city="Stockholm" 
            apiKey={apiKey}/>
            <BigCities city="Mumbai"
            apiKey={apiKey}/>
            <BigCities city="Hanoi"
            apiKey={apiKey} />
            <BigCities city="Rome"
            apiKey={apiKey} />
            <BigCities city="Berlin"
            apiKey={apiKey} />
        </div>
        </div>
      );
    }
    
    export default HeadComponent;