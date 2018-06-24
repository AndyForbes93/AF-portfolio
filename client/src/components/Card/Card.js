import React from "react";

const Card = props => (
    <div className="card mt-5">
    <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <a href={props.link} target="_blank" class="btn btn-primary">Check It Out</a>
    </div>
    </div>
);

export default Card;
