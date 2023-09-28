import React,{useState} from 'react';
//import icons
import {IoMdClose} from 'react-icons/io'
import { CgMenuRight } from 'react-icons/cg'
//import Link
import { Link } from 'react-router-dom';
//import motion
import { motion } from 'framer-motion';
import { ImFacebook, ImInstagram, ImYoutube } from 'react-icons/im';

//menu variants
const menuVariants = {
  hidden: {
    x: '100%'
  },
  show: {
    x: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.9],
    },
  },
};

const MobileNav = () => {
  const [openMenu, setOpenMenu] = useState("false");
  return (
    <nav className=" text-primary lg:hidden">
      {/* nav open button */}
      <div
        onClick={() => setOpenMenu(true)}
        className="text-3xl cursor-pointer"
      >
        <CgMenuRight />
      </div>
      {/* menu */}
      <motion.div
        variants={menuVariants}
        initial="hidden"
        animate={openMenu ? "show" : ""}
        className=" bg-white shadow-2xl w-full absolute top-0 right-0 max-w-xs h-screen z-20 flex flex-col"
      >
        {/* icon */}
        <div
          onClick={() => setOpenMenu(false)}
          className="text-4xl absolute z-30 left-4 top-14 text-primary cursor-pointer"
        >
          <IoMdClose />
        </div>
        <ul className="h-full flex flex-col justify-center items-center gap-y-8 text-primary font-bold font-primary text-3xl">
          <li>
            <Link to="/" className="hover:text-amber-400">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-amber-400">
              {" "}
              About
            </Link>
          </li>
          <li>
            <Link to="/portfolio" className="hover:text-amber-400">
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-amber-400">
              Contact
            </Link>
          </li>
        </ul>
        <div className=" h-[90px]">
          <ul className="flex gap-x-5 justify-center">
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=100004034923341"
                target="_blank"
              >
                <ImFacebook className="hover:text-amber-400" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/realphotography7_36/"
                target="_blank"
              >
                <ImInstagram className="hover:text-amber-400" />
              </a>
            </li>
            <li>
              <a href="http://www.youtube.com" target="_blank">
                <ImYoutube className="hover:text-amber-400" />
              </a>
            </li>
          </ul>
          <p className="text-center pt-2 font-light">All Rights Reserved </p>
          <p className="text-center font-bold">
            Developer <a href='https://www.instagram.com/rahul.jsx/' className='underline hover:text-blue-600'>Rahul</a>{" "}
          </p>
        </div>
      </motion.div>
    </nav>
  );
};

export default MobileNav;
