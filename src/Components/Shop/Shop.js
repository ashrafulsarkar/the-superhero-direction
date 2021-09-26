import React from 'react';
import Product from '../Product/Product';
import "./Shop.css";

const Shop = (props) => {
    return (
        <div className="row">
            {
                props.persons.map(person => <Product key={person.key} person={person} handerAddtoCard={props.handerAddtoCard}></Product>)
            }
        </div>
    );
};

export default Shop;