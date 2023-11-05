import React from 'react';
import Banner from './Banner/Banner';
import TopFood from './TopFood/TopFood';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const Foods= useLoaderData();
    return (
        <div>
            
        <Banner ></Banner>
        <TopFood Foods={Foods}></TopFood>
        </div>
    );
};

export default Home;