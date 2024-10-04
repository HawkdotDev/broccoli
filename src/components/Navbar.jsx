import { useState } from "react";
// import { close, menu } from "../assets";
import textLogo from "../assets/Company/textLogo.png";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("Home");

  return (
    <nav
      className={`w-full flex pt-4 pb-3 pl-8 pr-12 justify-between items-center fixed z-[99] bg-black }`}
    >
      <img src={textLogo} alt="toast" className="w-auto h-[38px]" />

      <ul className="list-none lg:flex hidden justify-center items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`relative group font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-white" : "text-dimWhite"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
            {/* Dropdown Menu */}
            <div className="absolute right-0 hidden group-hover:block text-nowrap p-2 px-6 bg-white text-black rounded-md shadow-lg mt-2">
              <ul className="list-none">
                <li className="px-4 py-2 hover:bg-gray-200">
                  <a href={`#${nav.id}-sub1`}>Sub Item 1</a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-200">
                  <a href={`#${nav.id}-sub2`}>Sub Item 2</a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-200">
                  <a href={`#${nav.id}-sub3`}>Sub Item 3</a>
                </li>
              </ul>
            </div>
          </li>
        ))}
      </ul>

      <div className="px-4 py-2 hover:bg-gray-200 bg-yellow-300 rounded-3xl text-amber-950">
        <a href={`#contact`}>Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
