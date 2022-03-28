import "./Card.css";

function Card(props) {
  return (
    <div className="container">
      <div className="card">
        {props.weatherIcon < 1 ? (
          ""
        ) : (
          <img
            src={
              props.isDayTime ? `/assets/img/day.png` : `/assets/img/night.png`
            }
            className="time card-image-top"
            alt=""
          />
        )}
        <div className="icon bg-light mx-auto text-center">
          <img
            src={
              props.weatherIcon < 1
                ? `/assets/img/meow.png`
                : `/assets/img/icons/${props.weatherIcon}.svg`
            }
            alt=""
          />
        </div>
        {props.temperature && <h5 className="card--text">{props.city}</h5>}
        {props.temperature && (
          <div className="card--text">{props.weatherText}</div>
        )}
        {props.temperature && (
          <div className="display-6 my-1">
            <span>{props.temperature} °C</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;
