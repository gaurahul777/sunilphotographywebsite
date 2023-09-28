import React from 'react';
//import images
import sunil from '../img/home/sunil.png'
// import woman from '../img/home/woman.png'

//import links
import {Link} from 'react-router-dom'
const Home = () => {
  return (
    <section className="section">
      <div className="container mx-auto h-full relative">
        {/* text and image wrapper */}
        <div className=" flex flex-col justify-center max-md:items-center">
          {/* text */}
          <div className=" w-full pt-24 pb-2 md:pt-0 md:pb-0 md:w-auto z-10 md:absolute flex flex-col justify-center md:items-center items-center ">
            <h1 className=" h1">
              photographer <br /> & film maker
            </h1>
            <p className="text-[20px] lg:text-[30px] font-primary mb-2 lg:mb-5">
              Uttar Pradesh, India
            </p>
            <Link to={"/contact"} className="btn mb-[3px]">
              Hire me
            </Link>
          </div>
          {/* image */}
          <div className="flex justify-center items-start md:justify-end">
            <div className="relative md:-right-[35px] ">
              <img
                className="xl:opacity-83 darkish  max-md:rounded-3xl object-contain origin-center"
                src={sunil}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
