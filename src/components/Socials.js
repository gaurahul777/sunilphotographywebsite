import React from 'react';
//import icons
import {
  ImFacebook,
  // ImTwitter,
  // ImPinterest,
  ImInstagram,
  ImYoutube,
} from 'react-icons/im';
const Socials = () => {
  return (
    <div className="hidden xl:flex ml-24 ">
      <ul className="flex gap-x-5">
        <li>
          <a
            href="https://www.facebook.com/profile.php?id=100004034923341"
            target="_blank"
          >
            <ImFacebook className="text-white hover:text-amber-400" />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/realphotography7_36/"
            target="_blank"
          >
            <ImInstagram className="text-white hover:text-amber-400" />
          </a>
        </li>
        <li>
          <a href="http://www.youtube.com" target="_blank">
            <ImYoutube className="text-white hover:text-amber-400" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
