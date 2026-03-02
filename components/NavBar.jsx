import React from "react";
import { FaCalendarDays } from "react-icons/fa6";
import { FaAlignJustify } from "react-icons/fa";
import { FaWalking } from "react-icons/fa";
import { TbGraphFilled } from "react-icons/tb";
import { IoSettingsSharp } from "react-icons/io5";

const NavBar = () => {
  return (
    <nav className="px-14 w-full h-15 relative z-2">
      <div className=" flex justify-between items-center border-b-2 w-full border-[#D1D1D1] py-4">
        {/**Logo Title */}
        <div className="flex items-center gap-3">
          <img src="image 2.png" />
          <h1 className="font-bold text-[20px] text-[#54378F]">TimeMinder</h1>
        </div>

        <div>
          <div className="flex flex-row gap-9">
            <div className="flex items-center gap-2 cursor-pointer">
              <TbGraphFilled size={27} />
              <button className="text-[16px] ">Overview</button>
            </div>
            <div className="flex items-center gap-2 cursor-pointer">
              <FaCalendarDays size={23} />
              <button className="text-[16px]">Calendar</button>
            </div>
            <div className="flex items-center gap-2 cursor-pointer">
              <FaWalking size={23} />
              <button className="text-[16px]">Habits</button>
            </div>
            <div className="flex items-center gap-2 cursor-pointer">
              <FaAlignJustify size={20} />
              <button className="text-[16px]">Lists</button>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <IoSettingsSharp size={20} />
          <div className="w-[33px] h-[33px] bg-[#D9D9D9] rounded-lg"></div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
