"use client";
import ProfileCard from "@/components/ProfileCard";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import React, { useState } from "react";
import { CiLocationOn } from "react-icons/ci";

const Match = () => {
  const [open, setOpen] = useState(true);

  const toggleModal = () => {
    setOpen((prev) => !prev);
  };
  return (
    <>
      <div className="flex-1 px-8 bg-[#F6F7F9] flex justify-center items-center">
        <ProfileCard />
      </div>
      <Dialog open={open} onOpenChange={toggleModal}>
        <DialogContent className="max-w-[340px] mx-auto">
          <div className="flex flex-col items-center text-center gap-5">
            <div className="w-[120px] h-[120px] flex justify-center items-center border-[3px] border-primary rounded-full">
              <CiLocationOn className="text-[70px] stroke-[0.002px]" />
            </div>
            <div>
              <p className="text-lg font-medium mb-1">
                Please enable your location
              </p>
              <p className="text-sm">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia
                rerum eos blanditiis porro natus possimus commodi, eveniet fugit
                dolores quod enim expedita.
              </p>
            </div>
            <div className="flex flex-col gap-2 w-full">
              <Button className="rounded-full w-full" onClick={toggleModal}>
                Allow
              </Button>
              <Button variant="ghost" className="rounded-full">
                Learn more
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Match;
