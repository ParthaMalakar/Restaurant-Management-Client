import  { useEffect, useState } from 'react';
import Food from '../Food/Food';

const AllFoods = () => {
    const [foodsItem, setFoodsItem] = useState([]);
    const[value,setValue]=useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/foods')
            .then(res => res.json())
            .then(data => setFoodsItem(data))
    }, [])

    const handleSearch = () => {
        fetch(`http://localhost:5000/search?name=${value}`)
          .then((response) => response.json())
          .then((data) => {
            setFoodsItem(data)
          })
          .catch((error) => console.error(error));
      };
    return (
        <div className='bg-slate-300 max-w-7xl mx-auto'>
            <h3 className={`text-center text-3xl mt-2 font-bold pt-6 `}>All Foods </h3>
            <div className="mt-10 flex justify-end">
                            <input type="text" onChange={(e) => setValue(e.target.value)} className="border-solid border-2 border-[#DEDEDE] bg-[#FFF] py-3 pl-1 w-80" name="text" placeholder="Search Food name here...." />
                            <button onClick={handleSearch} className="bg-[#FF444A] text-[#FFF] py-[14px] px-7">Search</button>
                        </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mb-2'>
                {
                    foodsItem.map(food => <Food
                        key={food._id} food={food}></Food>)
                }
            </div>

        </div>
    );
};

export default AllFoods;