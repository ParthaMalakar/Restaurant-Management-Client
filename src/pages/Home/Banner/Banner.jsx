import banner from '../../../assets/banner.jpg'
const Banner = () => {
    return (
        <div>
            <div className="hero max-w-full mx-auto" style={{

                background: 'rgba(255, 255, 255, 0.7)',

                backgroundImage: `url(${banner})`,

                backgroundSize: 'cover',

                backgroundPosition: 'center',

                backgroundRepeat: 'no-repeat',

                width: '100%',

                height: '580px',

            }}>
                <div className="hero-overlay bg-opacity-70"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <h1 className="mb-5 text-white text-3xl font-bold  ">Unique Dishes and Friendly Atmosphere</h1>
                        <p className='mb-5 text-white text-base font-thin lg:w-[950px]'>Step into our culinary haven, where every dish is a masterpiece and
                            every visit feels like coming home. Our menu boasts an array of
                            one-of-a-kind culinary creations that will tantalize your taste
                            buds and leave you craving for more. Whether you're sharing a
                            meal with friends or enjoying a quiet dinner for two, our warm
                            and friendly atmosphere sets the perfect backdrop for unforgettable
                            moments. Explore our exceptional dishes and immerse yourself in the
                            heartwarming ambiance. Your culinary adventure begins here.
                        </p>
                        <div className="mt-10">
                            <button className=" rounded-lg bg-[#8b4e50] text-[#FFF] py-[14px] px-7">All Menus</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;