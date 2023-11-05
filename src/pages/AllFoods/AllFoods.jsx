import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Food from '../Food/Food';

const AllFoods = () => {
    const Foods = useLoaderData();
    return (
        <div className='bg-slate-300 max-w-7xl mx-auto'>
                        <h3 className={`text-center text-3xl mt-2 font-bold pt-6 `}>All Foods </h3>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mb-2'>
            {
                    Foods.map(food => <Food
                        key={food._id} food={food}></Food>)
                } 
            </div>
           
      </div>
    );
};

export default AllFoods;