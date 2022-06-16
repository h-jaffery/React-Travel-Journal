import React from "react"
import PinIcon from "../images/pin-icon.svg"

export default function Card(props) {
    
    return (
        <div>
            <div className="card">
                <img src={props.imageUrl} className="card--image" alt="location-image" />

                <div className="card--right">
                    <div className="card--location">
                        <img src={PinIcon} className="pin--icon" alt="pin" />
                        <h4>{props.location}</h4>
                        <a href={props.googleMapsUrl}>View on Google Maps</a>
                    </div>

                    <h2 className="card--title">{props.title}</h2>
                    
                    <h3 className="card--dates">{props.startDate} - {props.endDate}</h3>

                    <p>{props.description}</p>
                </div>
            </div>
            <hr />
        </div>
    )
}