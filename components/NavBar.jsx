import { useState } from "react";
import { FaCalendarDays } from "react-icons/fa6";
import { FaAlignJustify } from "react-icons/fa";
import { FaWalking } from "react-icons/fa";
import { TbGraphFilled } from "react-icons/tb";
import { IoSettingsSharp } from "react-icons/io5";

const NavBar = () => {
  const [toggle, setToggle] = useState(true);

  const handleNavigationButton = () => {
    setToggle(!toggle);
  };

  return (
    <nav className="px-14 w-full h-15 relative z-2">
      <div className=" flex justify-between items-center border-b-2 w-full border-[#D1D1D1] py-4">
        {/**Logo Title */}
        <div className="flex items-center gap-3">
          <img src="image 2.png" />
          <h1 className="font-bold text-[20px] text-[#54378F]">TimeMinder</h1>
        </div>

        <div>
          <div className="flex flex-row gap-9 items-center pr-17">
            <div className="flex items-center gap-2 cursor-pointer">
              <TbGraphFilled size={25} />
              <button
                className="text-[16px] cursor-pointer"
                onClick={handleNavigationButton}
              >
                Overview
              </button>
            </div>
            <div className="flex items-center gap-2 cursor-pointer">
              <FaCalendarDays size={21} className="text-[#8A8484]" />
              <button
                className="text-[16px] cursor-pointer text-[#8A8484]"
                onClick={handleNavigationButton}
              >
                Calendar
              </button>
            </div>
            <div className="flex items-center gap-2 cursor-pointer">
              <FaWalking size={21} />
              <button
                className="text-[16px] cursor-pointer"
                onClick={handleNavigationButton}
              >
                Habits
              </button>
            </div>
            <div className="flex items-center gap-2 cursor-pointer">
              <FaAlignJustify size={18} />
              <button
                className="text-[16px] cursor-pointer"
                onClick={handleNavigationButton}
              >
                Lists
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <IoSettingsSharp size={20} />
          <div className="w-10 h-10 bg-[#D9D9D9] rounded-lg"></div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
