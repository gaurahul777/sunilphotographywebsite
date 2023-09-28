import React from "react";
import four from "../img/portfolio/4.jpeg";

const Contact = () => {
  return (
    <section className="section bg-slate-200 border-2">
      <div className="container mx-auto h-full overflow-y-auto scrollbar-hide">
        <div className="flex flex-col lg:flex-row h-full items-center justify-start pt-24 gap x-8 text-center lg:text-left">
          {/* bg */}
          <div className="hidden lg:flex bg-[white] absolute bottom-0 left-0 right-0 top-70 z-10"></div>
          {/* text and form*/}
          <div className="lg:flex-1 lg:pt-32 px-4">
            <h1 className="h1 drop-shadow-2xl">Contact me</h1>
            <p className="sm:m-5 lg:m-0">I would love to get suggestions from you.</p>
            {/* form */}
            <form className="flex flex-col gap-y-5 sm:gap-y-10 lg:gap-y-5">
              <div className="flex gap-x-10">
                <input
                  className="outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]"
                  type="text"
                  placeholder="Your name"
                />
                <input
                  className="outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]"
                  type="text"
                  placeholder="Your email address"
                />
              </div>
              <input
                className="outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]"
                type="text"
                placeholder="Your message"
              />
              <button className="btn mb-[8px] mx-auto lg:mx-0 self-start">Send it</button>
            </form>
          </div>
          {/* image */}
          <div className="lg:flex-1 ">
            <img src={four} alt='' className="h-50 sm:hidden lg:h-auto lg:block"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
