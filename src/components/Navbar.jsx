import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiChartBar } from "react-icons/hi";
import { BiTargetLock } from "react-icons/bi";
import avatar from "../../public/avatar.png";

const Navbar = () => {
  const { pathname } = useLocation();
  const [navDirect, setNavDirect] = useState(pathname);
  return (
    <div className="w-[64px] flex flex-col px-3 pt-3 pb-4 border-[1px] border-[#DCE9F9] h-screen">
      <div className="bg-[#147CED] flex mb-6 items-center justify-center font-bold text-white text-[20px] rounded-full w-10 h-10">
        D
      </div>
      <div className="bg-[#F0F3F8] rounded-[6px]">
        <Link
          to={"/dashboard"}
          className={`flex items-center justify-center w-full  p-[10px] rounded-[6px] `}
        >
          <HiChartBar
            className={`rounded-sm ${
              navDirect == "/" ? "bg-white" : ""
            } text-[#4094F7] font-bold`}
          />
        </Link>

        <Link
          to={"/marketing"}
          className={`flex items-center justify-center w-full  p-[10px] rounded-[6px] ${
            navDirect == "/marketing" ? "active__nav" : ""
          }`}
        >
          <BiTargetLock
            className={`rounded-sm ${
              navDirect == "/marketing" ? "bg-white" : ""
            } text-[#4094F7] w-6 h-5 font-bold`}
          />
        </Link>
      </div>

      <img
        src={avatar}
        alt="avatar"
        className="w-10 h-10 rounded-full mt-auto"
      />
    </div>
  );
};

export default Navbar;
