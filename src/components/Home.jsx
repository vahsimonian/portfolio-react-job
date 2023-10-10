import React from "react";
// import HeroImage from '../assets/heroimage.jpg'
import HeroImage from "../assets/icon.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
      id="home-mobile"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row home-screen">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Front-End Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I'm Vah, an Armenian in Cambodia since 2018, teaching English/Math
            across cultures. I've immersed myself in web development, mastering
            HTML, CSS, and JavaScript since late 2021. Ready to step into the
            role of a junior web developer, I try to blend creativity and logic
            to craft digital solutions. Let's connect and create!
          </p>

          <div>
            <NavLink
              to="/portfolio"
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </NavLink>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full home-img"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
