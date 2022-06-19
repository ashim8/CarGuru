import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
        <div>
            <nav>
                <Link to ="/home">Home</Link>
                <Link to="/orderReview">  Reviews</Link>
                <Link to="/dashBoard"> DASHBOARD</Link>
                <Link to="/blog"> Blog</Link>
                <Link to="/about"> ABOUT</Link>
            </nav>
        </div>
    );
};
export default Header;