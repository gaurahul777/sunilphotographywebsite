import React from 'react';
import sunilabout from '../img/about/aboutsunil.png'

const About = () => {
  return (
    <section className="h-screen">
      <div className="">
        {/* wrapper */}
        <div className=" h-screen flex flex-col-reverse pt-[80px] md:pt-0 max-md:items-center md:items-center md:flex-row-reverse md:justify-between ">
          <div className="md:w-full md:h-screen z-10 opacity-84 border-2">
            {/* image box */}
            <img
              src={sunilabout}
              className="opacity-83 object-cover center z-10 shadow-slate-800 shadow-lg h-[300px] w-[300px] max-sm:h-[250px] max-sm:w-[250px]  md:w-full md:h-screen"
              alt=""
            />
          </div>
          <div className=" flex flex-col justify-center text-center p-5  w-full h-screen my-auto mx-auto z-20">
            {/* text */}
            <h1 className="hidden vsm:block md:h1  font-bold text-3xl font-primary mb-2 ">
              About Me
            </h1>
            <p className=" text-slate-700 md:p-5 md:text-lg font-semibold">
              hy my name is sunil iam an enginner and also work as a
              photographer this website was design by rahul he is very talented
              guy follow him on insta :-
              <a  className="underline bg-amber-400 uppercase font-bold px-2 py-1 rounded-sm hover:bg-orange-100" href="https://www.instagram.com/rahul.jsx/">
                rahul.jsx
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
