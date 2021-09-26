import React from 'react';
import "./Card.css";

const Card = (props) => {
    const {card} = props;

    let total = 0;
    for (const parson of card) {
        total = total+ parseInt(parson.salary);
    }

    return (
        <div className="card-part">
            <h3>Total Added: <span>{props.card.length}</span></h3>
            <h3>Total Cost: $<span>{total}</span></h3>
            <ul>
                {
                    card.map(parson => <li>{parson.name}</li>)
                }
            </ul>
            <button>Buy Now</button>
        </div>
    );
};

export default Card;