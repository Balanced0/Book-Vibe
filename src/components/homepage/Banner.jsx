import React from 'react';
import BannerImage from '../../assets/pngwing.png';

const Banner = () => {
    return (
        <div className="container mx-auto px-4">
            <div className="hero bg-base-200 rounded-2xl py-10 md:py-16 lg:py-20 px-4 md:px-10 lg:px-20">
            <div className="hero-content flex-col gap-20 lg:flex-row-reverse">
                <img
                src={BannerImage}
                className="max-w-sm rounded-lg"
                />
                <div>
                <h1 className="text-6xl font-bold leading-20 playfair-font mb-12">Books to freshen up<br></br> your bookshelf</h1>
                <button className="btn btn-success rounded-lg text-white">View The List</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Banner;