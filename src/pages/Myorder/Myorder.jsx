import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/Authprovider';
import { useLoaderData } from 'react-router-dom';
import OrderedFood from '../OrderedFood/OrderedFood';

const Myorder = () => {

    const { user } = useContext(AuthContext);
    const{email}=user;
    const[order,setOrder]=useState([])
    const FoodsItem = useLoaderData();
    useEffect(() => {
        fetch(`http://localhost:5000/user/${email}`)
            .then(res => res.json())
            .then(data => setOrder(data.Myorder))
    }, [])
    const cartIds = order.map(order => order._id);
    console.log(cartIds)
    const foodsById = {};
    FoodsItem.forEach(food => {
    foodsById[food._id] = food;
  });
 
  const matchedfoods = cartIds.map(id => foodsById[id]);
  console.log(matchedfoods)
  const myfoods = matchedfoods.filter(pro => pro !== undefined);

    

    
    
   
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-7'>
            {myfoods.map((food,index)=><OrderedFood key={index} food={food} ></OrderedFood>)}
            
        </div>
        </div>
    );
};

export default Myorder;