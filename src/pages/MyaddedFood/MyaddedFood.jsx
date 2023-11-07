import React from 'react';
import { useLoaderData } from 'react-router-dom';

const MyaddedFood = () => {
    const Myaddedfood = useLoaderData();
    return (
        <div>
            {

                Myaddedfood.length == 0 ? <div className='text-center max-w-7xl bg-slate-200 mt-4 mx-auto '>
                <p className='font-bold'>No Food added.</p>
                <img className='h-[500px] mx-auto' src="https://i.ibb.co/ZVR6MYF/9318688.jpg" alt="No results" />
            </div>
            : <div></div>
            
        
        }
        </div>
    );
};

export default MyaddedFood;