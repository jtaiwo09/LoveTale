"use client";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { IoSettingsOutline } from "react-icons/io5";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import Filter from "../sidebar/Filter";
import { useRouter, useSearchParams } from "next/navigation";
import MatchesAndMessage from "../sidebar/MatchesAndMessage";

const Sidebar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const type = searchParams.get("type");

  const handleFilter = () => {
    router.push("/match?type=filter");
  };
  return (
    <div className="max-w-[400px] w-full h-dvh relative">
      <div className="px-5 min-h-[80px] flex items-center w-full sticky top-0 bg-primary">
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center">
            <Avatar className="border border-white w-[50px] h-[50px]">
              <AvatarImage
                src="https://github.com/shadcn.png"
                alt="profile_image"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p className="ml-2 text-white">Taiwo Joseph</p>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger className="focus-visible:outline-none focus:outline-none">
              <IoSettingsOutline className="text-white text-2xl cursor-pointer" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem onClick={handleFilter}>Filter</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="px-5">
        {type == "filter" ? <Filter /> : <MatchesAndMessage />}
      </div>
    </div>
  );
};

export default Sidebar;
