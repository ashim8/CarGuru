import React from 'react';
import './Order.css'
const Order = (props) => {
    const{name,image,review,rating}=props.aCar;
    return (
        <div className='a-car'>
           <img src={image} alt="" />
           <h3>{name}</h3>
           <p>Price: ${review}</p>
           <p>Rating: {rating}</p>
        </div>
    );
};

export default Order;