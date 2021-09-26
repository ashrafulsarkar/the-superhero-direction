import React from 'react';

const Product = (props) => {
    const {name,image,role,age,country,salary} = props.person;
    return (
        <div className="col-lg-4">
            <div className="single-item mb-3">
                <div className="item-img">
                    <img src={image} alt="" />
                </div>
                <div className="item-info">
                    <h5>{name}</h5>
                    <h5>{role}</h5>
                    <p>Age: {age}</p>
                    <p>Country: {country}</p>
                    <p>Salary: ${salary}</p>
                </div>
                <div className="add-to-card">
                    <button onClick={()=>props.handerAddtoCard(props.person)}><i className="fas fa-shopping-cart"></i> Add to card</button>
                </div>
            </div>
        </div>
    );
};

export default Product;