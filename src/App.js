import Forecast from "./components/Forecast/Forecast.js";
import Geolocation from "./components/Geolocation/Geolocation.js";

function App() {

  return (
    <div className="App">
      <header className="App-header">
      </header>

      <div>
        <Geolocation />
        <Forecast />
      </div>

    </div>
  );
}

export default App;
