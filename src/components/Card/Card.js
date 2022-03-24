



export default function Card(){

    let timeSrc = weather.IsDayTime ? "../img/day.svg" : "../img/night.svg";

    time.setAttribute("src", timeSrc),
    icon.setAttribute("src", `../img/icons/${weather.WeatherIcon}.svg`)


    return  (
        <div className="container">
            <div className="card">
            <img src={timeSrc} className="time card-image-top" alt="https://via.placeholder.com/150"/>

            <div className="icon bg-light mx-auto text-center">
            </div>
                <h5 className="card--text">CITY NAME</h5>
                <div className="card--text">weather condition</div>
                <div className="display-4 my-4">
                <span>temp</span>    
                <span>&deg;C</span>
            </div>
            </div>

            </div>

        )
}