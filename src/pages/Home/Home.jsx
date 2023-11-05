import React from 'react';
import Banner from './Banner/Banner';
import TopFood from './TopFood/TopFood';
import { useLoaderData } from 'react-router-dom';
import Reservation from './Reservation/Reservation';
import Menu from './Menu/Menu';

const Home = () => {
    const Foods= useLoaderData();
    return (
        <div>
            
        <Banner ></Banner>
        <TopFood Foods={Foods}></TopFood>
        
        <div className='bg-slate-200 pt-3 max-w-7xl mx-auto'>
        <Reservation></Reservation>
        
        </div>
        <Menu></Menu>
        </div>
    );
};

export default Home;