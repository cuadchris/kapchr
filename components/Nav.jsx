import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <div>
      <div>
        <Link href="/">
          <h1>Kapchr.</h1>
        </Link>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/gallery">Gallery</Link>
          </li>
          <li>
            <Link href="/portfoilio">Work</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
