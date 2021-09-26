import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Shop from '../Shop/Shop';
import "./Main.css";

const Main = () => {
    const [persons, setPersons] = useState([]);
    const [card, setCard] = useState([]);

    useEffect(()=>{
        fetch('./data.json')
        .then(res => res.json())
        .then(data => setPersons(data));
    },[])

    const handerAddtoCard = person =>{
        const newCard = [...card, person];
        setCard(newCard);
    }

    return (
        <main>
            <div className="container">
                <div className="row">
                    <div className="col-lg-9">
                        <Shop persons={persons} handerAddtoCard={handerAddtoCard}></Shop>
                    </div>
                    <div className="col-lg-3">
                        <Card card={card}></Card>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Main;