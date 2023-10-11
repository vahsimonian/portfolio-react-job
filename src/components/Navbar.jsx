import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "about",
    },
    {
      id: 2,
      link: "portfolio",
    },
    {
      id: 3,
      link: "experience",
    },
    {
      id: 4,
      link: "contact",
    },
  ];

  return (
    <div className="w-full h-20 px-4 navbar-mobile">
      <div>
        <h1 className="text-4xl font-signature ml-2">Vah Simon</h1>
      </div>

      <ul className="flex">
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : null)}
          to={"/"}
        >
          <li className="px-4 cursor-pointer capitalize font-medium text-gray-500">
            Home
          </li>
        </NavLink>
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500"
          >
            <NavLink
              className={({ isActive }) => (isActive ? "active-link" : null)}
              to={link}
            >
              {link}
            </NavLink>
          </li>
        ))}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <NavLink
                to={link}
                className={({ isActive }) => (isActive ? "active-link" : null)}
              >
                {link}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
