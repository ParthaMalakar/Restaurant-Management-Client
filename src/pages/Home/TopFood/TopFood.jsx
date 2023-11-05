

const TopFood = () => {
    return (
        <div>
            <h3 className={`text-center text-3xl mt-3 font-bold `}>Top Food section</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-5'>
                {/* {
                    brands.map(brand => <Brand
                        key={brand._id} brand={brand}></Brand>)
                } */}
            </div>
        </div>
    );
};

export default TopFood;