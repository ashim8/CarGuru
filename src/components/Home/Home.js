import React from 'react';
import { Link } from 'react-router-dom';
import ACar from '../ACar/ACar';
import useCar from '../../hooks/useCars';
import Cart from '../Cart/Cart';
import './Home.css'
const Home = (props) => {
    const [aCars, setACar] = useCar();
    return (
        
        <div className='home-container'>
            <div className="acar-container1">
                <h1>CarGurus</h1>
                <h3>The All New BMW Models</h3>
                <p>Find new and used cars online. 2 million vehicles eligible for home delivery. Use the price comparison tool to see deals. Mobile app offers price alerts and shows recent searches. Online payment calculators and reviews</p>
            </div>
            <div className="car-containerOne">
                <Cart></Cart>
            </div>
            <div className="car-container">
               {
                   aCars.slice(0,3).map(aCar=><ACar
                    key={aCar.id}
                    aCar={aCar}
                    ></ACar>)
               }
                
                {
                    <Link to="/orderReview"><button className='button'> See All review</button> </Link>
                }
            </div>
        </div>
    );
};
export default Home;