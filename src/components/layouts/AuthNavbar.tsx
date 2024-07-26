import Image from "next/image";
import Link from "next/link";
import React from "react";

const AuthNavbar = () => {
  return (
    <div className="sticky top-0 min-h-[80px] flex items-center justify-center w-full shadow-md">
      <Link href="/" className="flex items-center">
        <Image
          src="/logo.png"
          alt="logo"
          width={45}
          height={45}
          className="mr-1"
        />
        <p className="text-[28px] font-medium">LoveTale</p>
      </Link>
    </div>
  );
};

export default AuthNavbar;
