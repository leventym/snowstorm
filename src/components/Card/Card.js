import './Card.css'

export default function Card(){
    return  (
        <div className="container">
            <div className="card">
            <img src="https://via.placeholder.com/150" className="time card-image-top" alt="korv"/>
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
