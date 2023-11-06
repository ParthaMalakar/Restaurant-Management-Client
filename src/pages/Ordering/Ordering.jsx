import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../provider/Authprovider';

const Ordering = () => {
    const food = useLoaderData();
    const { _id, food_name, food_image, food_category, price, quantity } = food;
    const { user } = useContext(AuthContext);
    console.log(user)
    return (
        <div>
            <div className="bg-[#58778f1a]">
                <h2 className="text-3xl my-7 pt-5 text-center font-bold">Please Give Information for Order</h2>
                <form className=" md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Food Name</span>
                        </label>
                        <input type="text" defaultValue={food_name} required name="name" placeholder="Food Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold"> Price</span>
                        </label>
                        <input type="text" defaultValue={price} required name=" Price" placeholder=" Price" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Available Quantity: {quantity}</span>
                        </label>
                        <input type="text" required  name="quantity" placeholder="Quantity you need" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Buyer Name</span>
                        </label>
                        <input type="text" defaultValue={user.displayName} required name="BName" placeholder="Buyer Name" readOnly className="input input-bordered" />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Buyer Email</span>
                        </label>
                        <input type="email" defaultValue={user.email} required name="BEmail" placeholder="Buyer Email" readOnly className="input input-bordered" />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Buying Date</span>
                        </label>
                        <input type="date" required name="BDate" placeholder="Buying Date" className="input input-bordered" />

                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-red-400 text-white font-bold">Purchase</button>
                    </div>
                </form>
            </div>
            </div>
            );
};

            export default Ordering;