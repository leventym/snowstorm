import "./Card.css";

export default function Card(props) {
  // let timeSrc = weather.IsDayTime ? "../img/day.svg" : "../img/night.svg";
  // time.setAttribute("src", timeSrc),
  // icon.setAttribute("src", `../img/icons/${weather.WeatherIcon}.svg`)

  return (
    <div className="container">
      <div className="card">
        {/* <img src={timeSrc} className="time card-image-top" alt="https://via.placeholder.com/150"/> */}
        <div className="icon bg-light mx-auto text-center"></div>
        {props.temperature && <h5 className="card--text">{props.city}</h5>}
        {props.temperature && (
          <div className="card--text">{props.weatherText}</div>
        )}
        {props.temperature && (
          <div className="display-4 my-4">
            <span>{props.temperature} C</span>
          </div>
        )}
      </div>
    </div>
  );
}
