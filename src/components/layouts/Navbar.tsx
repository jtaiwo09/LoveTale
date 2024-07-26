"use client";
import Link from "next/link";
import React, { useState } from "react";
import { navLinks } from "../../../data";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Login from "../Login";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggleModal = () => {
    setOpen((prev) => !prev);
  };
  return (
    <div className="sticky top-0 w-full min-h-[70px] px-5 sm:px-[30px] flex items-center bg-[#030304] z-[20]">
      <div className="flex items-center justify-between gap-3 w-full">
        <div className="flex items-center gap-4 max-w-[480px] w-full justify-between">
          <Link href="/" className="text-primary font-medium text-[28px]">
            LoveTale
          </Link>
          <ul className="flex items-center gap-6 text-white">
            {navLinks.map((link) => (
              <li key={link.id} className="">
                <Link href={link.href}>{link.title}</Link>
              </li>
            ))}
            <li>Download</li>
          </ul>
        </div>
        <div className="flex items-center gap-2">
          <Select>
            <SelectTrigger className="w-[120px] bg-black text-white border-none border-">
              <SelectValue placeholder="English" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="english">English</SelectItem>
              <SelectItem value="french">French</SelectItem>
              <SelectItem value="arabic">Arabic</SelectItem>
            </SelectContent>
          </Select>
          <Button className="rounded-full min-w-[100px]" onClick={toggleModal}>
            Login
          </Button>
        </div>
      </div>
      <Login open={open} onClose={toggleModal} />
    </div>
  );
};

export default Navbar;
