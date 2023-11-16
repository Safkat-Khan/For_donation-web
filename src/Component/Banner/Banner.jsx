

const Banner = () => {
    return (
       <div>
         <div className="hero min-h-screen object-cover" style={{ backgroundImage: 'url(https://i.ibb.co/Xt3B4pr/donation.jpg)' }}>
            <div className="hero-overlay bg-opacity-80"></div>
            <div className="hero-content text-center text-neutral-content">
                <div>
                    <h1 className="lg:text-5xl text-xl font-bold mb-10 text-white ">I Grow By Helping People In Need</h1>
                    <input type="text" placeholder="Search here...." className="p-4 rounded-l lg:w-72 input-error text-black" />
                    <button className="bg-[#FF444A] lg:w-28 p-4 rounded-r">Search</button>
                </div>
            </div>
        </div>
       </div>
    );
};

export default Banner;