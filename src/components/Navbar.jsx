import React, { useState } from "react";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close } from "../assets";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary `}
    >
      <div className="flex items-center justify-between w-full mx-auto max-w-7xl">
        <Link
          to="/"
          className="flex items-center justify-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <div className="text-2xl font-bold tracking-widest text-white uppercase cursor-pointer">
            Karim AlMasri
          </div>
        </Link>
        <ul className="flex-row hidden gap-10 list-none sm:flex">
          {navLinks.map((link) => {
            return (
              <li
                key={link.id}
                className={`${
                  active === link.title ? "text-white" : "text-secondary"
                } hover:text-white font-medium`}
                onClick={() => setActive(link.title)}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            );
          })}
        </ul>
        <div className="flex items-center justify-end flex-1 sm:hidden">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="object-contain cursor-pointer w-7 h-7"
            onClick={() => {
              setToggle(!toggle);
            }}
          />
          <div
            className={`${
              toggle ? "flex" : "hidden"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[120px] z-10 rounded-xl`}
          >
            <ul className="flex flex-col items-start justify-end gap-3 list-none">
              {navLinks.map((link) => {
                return (
                  <li
                    key={link.id}
                    className={`${
                      active === link.title ? "text-white" : "text-secondary"
                    } cursor-pointer font-poppins text-lg font-medium`}
                    onClick={() => {
                      setActive(link.title);
                      setToggle(!toggle);
                    }}
                  >
                    <a href={`#${link.id}`}>{link.title}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
