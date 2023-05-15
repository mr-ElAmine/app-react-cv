import React from 'react';
import Onglets from './Onglets';

const Portfolio = () => {
    return (
        <div id='portfolio'>
            <div className='portfolioContent'>
                <h3>PORTFOLIO :</h3>
                <ul>
                    <Onglets></Onglets>
                </ul>
            </div>
        </div>
    ); 
};

export default Portfolio;