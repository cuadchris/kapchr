import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Nav = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#ffffff");
        setTextColor("#000000");
      } else {
        setColor("transparent");
        setTextColor("white");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300"
    >
      <div className="max-w-[1240] m-auto flex justify-between items-center p-4 text-white">
        <Link href="/">
          <h1 style={{ color: `${textColor}` }} className="font-bold text-4xl">
            Kapchr.
          </h1>
        </Link>
        <ul style={{ color: `${textColor}` }} className="hidden sm:flex">
          <li className="p-4">
            <Link href="/">Home</Link>
          </li>
          <li className="p-4">
            <Link href="/gallery">Gallery</Link>
          </li>
          <li className="p-4">
            <Link href="/portfoilio">Work</Link>
          </li>
          <li className="p-4">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        {/* mobile button */}
        <div className="block sm:hidden z-10">
          {nav ? (
            <AiOutlineClose
              style={{ color: `${textColor}` }}
              onClick={handleNav}
              size={20}
            />
          ) : (
            <AiOutlineMenu
              style={{ color: `${textColor}` }}
              onClick={handleNav}
              size={20}
            />
          )}
        </div>
        {/* mobile menu */}
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300 opacity-100 transition"
              : "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300 opacity-0 transition"
          }
        >
          <ul>
            <li className="p-4 text-4xl hover:text-gray-500 ease-linear duration-300">
              <Link href="/">Home</Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-500 ease-linear duration-300">
              <Link href="/gallery">Gallery</Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-500 ease-linear duration-300">
              <Link href="/portfoilio">Work</Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-500 ease-linear duration-300">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
