import React from 'react';
import Avatars from './Avatars';
import Title, { HomeSearch, TrendingJobLink } from './Title';
import CarouselUi from './Carousel';


const Section1 = () => {

    return (
        <div>
            <div className='bg-gradient-to-b from-[#fffbfb] via-[#fdedee] to-[#fdf6f6]'>
                <div className='container'>

                    <Avatars />

                    <Title />

                    <HomeSearch />

                    <TrendingJobLink />
                </div>
            </div>

            <div className='bg-gradient-to-b from-[#fdf6f6] to-[#ffffff]'>
                <div className='container'>
                    <CarouselUi />
                </div>
            </div>
        </div>
    );
};

export default Section1;