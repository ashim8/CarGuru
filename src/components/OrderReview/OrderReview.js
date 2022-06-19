import React from 'react';
import './OrderReview.css'
import ACar from '../ACar/ACar';
import useCar from '../../hooks/useCars';
const OrderReview = () => {
    const [aCars, setACar] = useCar();
    return (
       <div className='home-container'>
           <div className="acar-container">
               {
                   aCars.map(aCar=><ACar
                   key={aCar.id}
                   aCar={aCar}
                   ></ACar>)
                  
               }
           </div>
     </div>
   );
};
export default OrderReview;

 