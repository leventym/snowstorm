import "./Card.css";



function Card(props) {

  return (

  <div className="container">
    <div className="card">
    <img src={props.isDayTime ? `/assets/img/day.png` : `/assets/img/night.png`} 
      className="time card-image-top" alt="https://via.placeholder.com/150"/>

      <div className="icon bg-light mx-auto text-center">
        <img src={`/assets/img/icons/${props.weatherIcon}.svg`} alt="korv" />
      </div>

        {props.temperature && <h5 className="card--text">{props.city}</h5>}
        {props.temperature && (
        <div className="card--text">{props.weatherText}</div>
        )}
          {props.temperature && (
          <div className="display-4 my-4">
          <span>{props.temperature} °C</span>
          </div>
          )}
          
    </div>
  </div>
  );
}

export default Card