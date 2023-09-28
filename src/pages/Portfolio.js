import React from 'react';
import one from '../img/portfolio/1.png'
import two from '../img/portfolio/2.png'
import three from '../img/portfolio/3.jpeg'
import four from '../img/portfolio/4.jpeg'
import five from '../img/portfolio/5.jpeg'
import six from '../img/portfolio/6.png'
// import v0 from '../img/portfolio/v0.mp4'
import v1 from '../img/portfolio/v1.mp4'
import v2 from '../img/portfolio/v2.mp4'

const Portfolio = () => {
  return (
    <section className=" grid place-items-center section bg-green-200 p-5">
      <div className="scrollbar-hide section overflow-y-auto ">
        <div className=" section p-4 max-w-5xl grid gap-4  pt-[65px]  lg:pt-[95px] xl:pt-[130px] max-xs:grid-cols-2 xs:grid-cols-2 md:grid-cols-4">
          {/* <h1 className=" max-xs:hidden h-18 w-18 bg-white text-4xl xs:col-span-2 xs:grid xs:grid-cols-2 xs:gap-4 "> */}
          {/* <span className="pt-10 xs:h-auto xs:square bg-yellow-500 xs:text-center"> */}
          <div className=" max-xs:hidden h-18 w- xs:h-auto  xs:square row-span-2 ">
            <video
              className=" h-[300px] xs:h-[450px] w-[500px] "
              controls
              loop
              muted
              autoplay="autoplay"
            >
              <source src={v1} />
            </video>
          </div>
          {/* </span> */}
          {/* </h1> */}
          {/* <p className="max-xs:hidden h-18 w-18 xs:row-start-2 xs:col-start-2 xs:self-center">
            lorem ipsum dolor sit amet kdkdkkdk ieiieieiiei mxnxnxx ht ieejee
            akme officials
          </p> */}
          <div className=" shadow-xl h-18 w-18 xs:h-auto  xs:square">
            <img
              className="shadow-xl p-2 h-full w-full object-cover"
              src={one}
              alt=""
            />
          </div>
          <div className="md:col-span-2 md:row-start-4 drop-shadow-xl h-18 w-18 text-center flex flex-col justify-center text-xl font-semibold  xs:h-auto  xs:square">
            {/* <img className="h-full w-full object-cover" src="" alt="text1" /> */}
            "My job as a portrait photographer is to seduce, amuse, and
            entertain." - Helmut Newton
          </div>
          <div className="md:row-start-2 md:col-start-2 drop-shadow-xl text-center flex flex-col justify-center text-xl font-semibold h-18 w-18 xs:h-auto  xs:square">
            {/* <img className="h-full w-full object-cover" src="" alt="" /> */}
            "If you can see it, you can shoot it." - Ted Grant
          </div>
          <div className=" shadow-xl h-18 w-18 xs:h-auto  xs:square">
            <img
              className="p-2 shadow-xl h-full w-full object-cover"
              src={two}
              alt=""
            />
          </div>
          <div className="md:col-start- md:col-span-2 md:row-start-3 shadow-xl h-18 w-18 xs:h-auto  xs:square">
            <img
              className="p-2 shadow-xl h-full w-full object-contain"
              src={three}
              alt=""
            />
          </div>
          <div className="md:col-start-3 md:row-start-3 md:col-span-2 drop-shadow-xl text-center flex flex-col justify-center text-xl font-semibold h-18 w-18 xs:h-auto  xs:square">
            {/* <img className="h-full w-full object-cover" src="" alt="" /> */}
            "Photography, to me, is catching a moment which is passing, and
            which is true." - Jacques-Henri Lartigue{" "}
          </div>
          <div className="p-1 drop-shadow-xl text-center flex flex-col justify-center text-xl font-semibold h-18 w-18 xs:h-auto  xs:square">
            {/* <img className="h-full w-full object-cover" src="" alt="" /> */}
            "The art of photography is all about directing the attention of the
            viewer." - Steven Pinker
          </div>

          <div className="md:col-span-2 md:col-start-3 md:row-start-4 shadow-xl h-18 w-18  xs:h-auto  xs:square">
            <img
              className="shadow-xl p-2 h-full w-full object-cover"
              src={four}
              alt=""
            />
          </div>
          <div className="md:col-start-1 md:row-start-6 shadow-xl h-18 w-18 xs:h-auto  xs:square">
            <img
              className="md:p-0 p-2 shadow-xl h-full w-full object-cover"
              src={five}
              alt=""
            />
          </div>
          <div className="p-1 md:col-start-2 md:row-start-6 drop-shadow-xl text-center flex flex-col justify-center text-xl font-semibold h-18 w-18 xs:h-auto  xs:square">
            {/* <img className="h-full w-full object-cover" src="" alt="" /> */}
            "In the world of photography, you get to share a captured moment
            with other people." - James Wilson
          </div>
          <div className="p-1 md:col-start-4 md:row-start-7 drop-shadow-xl text-center flex flex-col justify-center text-xl font-semibold h-18 w-18 xs:h-auto  xs:square">
            {/* <img className="h-full w-full object-cover" src="" alt="" /> */}
            "The camera is an instrument that teaches people how to see without
            a camera." - Dorothea Lange
          </div>
          <div className="md:col-start-3 md:row-start-7 h-18 w-18 shadow-xl xs:h-auto  xs:square">
            <img
              className="md:p-0 shadow-xl p-2 h-full w-full object-cover"
              src={six}
              alt=""
            />
          </div>
          <div className=" flex justify-end  md:row-start-1 md:col-start-3 md:row-span-2 max-xs:hidden h-18 w-18 xs:h-auto  xs:square col-start-1">
            <video
              className="w-[290px] h-[290px] xs:h-[420px]"
              controls
              loop
              muted
              autoplay="autoPlay"
            >
              <source src={v2} />
            </video>
          </div>
          {/* <p className=" max-xs:hidden h-18 w-18 xs:row-start-7 xs:col-start-2 xs:self-center p-3">
            hola hy hkik ddhjewnd uehee joow ouwnsmkx my name is{" "}
          </p> */}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
