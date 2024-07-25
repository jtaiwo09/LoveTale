import Link from "next/link";
import React from "react";
import { navLinks } from "../../../data";

const Navbar = () => {
  return (
    <div className="sticky top-0 w-full min-h-[70px] px-5 sm:px-[30px] flex items-center">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center">
          <Link href="/">LoveTale</Link>
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link href={link.href}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Navbar;
