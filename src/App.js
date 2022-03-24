import Card from "./components/Card/Card";
import BigCities from "./components/BigCities/BigCities";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Card />
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
