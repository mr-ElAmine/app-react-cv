import React from 'react';
import Contact from '../components/Contact';
import Home from '../components/Home';
import Knowledges from '../components/Knowledges';
import Portfolio from '../components/Portfolio';
import Sociale from '../components/Sociale';

const Main = () => {
    return (
        <>
            <div className='main'>
                <Home></Home>
                <Contact></Contact>
                <Sociale></Sociale>
                <Knowledges></Knowledges>
                <Portfolio></Portfolio>
            </div>
        </>
    );
};

export default Main;