import React from 'react';
import Banner from './Banner/Banner';
import TopFood from './TopFood/TopFood';
import { useLoaderData } from 'react-router-dom';
import Reservation from './Reservation/Reservation';
import Menu from './Menu/Menu';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    const Foods= useLoaderData();
    return (
        <div>
           <Helmet>
            <title>FoodieFleet|Home</title>
            </Helmet> 
        <Banner ></Banner>
        <TopFood Foods={Foods}></TopFood>
        
        <div className='bg-slate-200 pt-3 max-w-7xl mx-auto'>
        <Reservation></Reservation>
        
        </div>
        <div className='max-w-7xl mx-auto'>
        <Menu></Menu>
        </div>
        
        </div>
    );
};

export default Home;