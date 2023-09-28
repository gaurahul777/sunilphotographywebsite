import React from 'react';
//import components

import AnimRoutes from "../components/AnimRoutes";
import MobileNav from "../components/MobileNav";
import Socials from '../components/Socials'
import logo from '../img/header/logo.svg'
import sk2 from '../img/header/sk2.png'

//import link
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="drop-shadow-2xl  w-full h-[80px] lg:h-[130px] fixed px-[20px] lg:px-[80px] z-30 flex items-center">
      {/* Header */}
      <div className=" max-md:text-center max-md:items-center flex flex-col lg:flex-row lg:items-center w-full justify-between">
        {/* logo */}
        <Link to={"/"} className="max-w-[200px] text-center">
          <h1 className="hidden vsm:block text-3xl  font-medium">
            <span className="text-4xl lg:text-5xl">S</span>unil
            <span className="text-5xl lg:text-6xl">K</span>umar
          </h1>
          <h1 className="vsm:hidden text-3xl font-medium">
            <span className="text-4xl">S</span>
            <span className="text-5xl">K</span>
          </h1>
          {/* <img  className ="vsm:hidden bg-white lg:h-30 h-20 w-20" src={sk2} alt=''/>  */}
        </Link>
        {/* nav initially hidden show on desktop mode */}
        <nav className="hidden lg:flex  gap-x-12 font-semibold text-xl lg:text-2xl lg:text-white">
          <Link
            to={"/"}
            className="text-[#696c6d] xl:text-[black] lg:text-white font-primary hover:text-amber-400 xl:hover:text-amber-400 transition"
          >
            <span className="lg:text-black text-2xl hover:text-amber-400">
              Ho
            </span>
            me
          </Link>
          <Link
            to={"/about"}
            className="text-[#696c6d] xl:text-[black] lg:text-white font-primary hover:text-primary  xl:hover:text-yellow-50 transition"
          >
            About
          </Link>
          <Link
            to={"/portfolio"}
            className="text-[#696c6d] lg:text-[white] font-primary hover:text-primary transition"
          >
            Portfolio
          </Link>
          <Link
            to={"/contact"}
            className="text-[#696c6d] lg:text-[white] font-primary hover:text-primary transition"
          >
            Contact
          </Link>
        </nav>
      </div>
      {/* socials */}
      <Socials />
      {/* mobile nav */}
      <MobileNav />
    </header>
  );
};

export default Header;
