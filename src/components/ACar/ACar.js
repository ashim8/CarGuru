import React from 'react';
import './ACar.css'
const ACar = (props) => {
    const{name,image,review,rating}=props.aCar;
    return (
        <div className='a-car'>
           <img src={image} alt="" />
           <h3>{name}</h3>
           <p>Review: ${review}</p>
           <p>Rating: {rating} ⭐</p>
        </div>
    );
};

export default ACar;

