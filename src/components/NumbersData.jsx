import React from "react";
import { AiOutlineShop } from "react-icons/ai";
import { MdPeopleAlt } from "react-icons/md";
import { FaBell } from "react-icons/fa";
import { FaCar } from "react-icons/fa6";

const NumbersData = () => {
  return (
    <ul className="flex gap-[20px] mb-[20px]">
      <li className="flex items-center justify-between w-[271px] p-6 rounded-[6px] bg-white">
        <div>
          <h2 className="text-[#4094F7] mb-2 font-bold text-[24px] leading-[40px]">
            24
          </h2>
          <p className="text-[#6E8BB7] text-[14px] leading-6">Филиалы</p>
        </div>
        <div className="p-5 rounded-[6px] flex- items-center justify-center bg-[#e2EFFE]">
          <AiOutlineShop className="w-8 h-8 text-[#4094F7]" />
        </div>
      </li>
      <li className="flex items-center justify-between w-[271px] p-6 rounded-[6px] bg-white">
        <div>
          <h2 className="text-[#4094F7] mb-2 font-bold text-[24px] leading-[40px]">
            110,823
          </h2>
          <p className="text-[#6E8BB7] text-[14px] leading-6">Клиенты</p>
        </div>
        <div className="p-5 rounded-[6px] flex- items-center justify-center bg-[#e2EFFE]">
          <MdPeopleAlt className="w-8 h-8 text-[#4094F7]" />
        </div>
      </li>
      <li className="flex items-center justify-between w-[271px] p-6 rounded-[6px] bg-white">
        <div>
          <h2 className="text-[#4094F7] mb-2 font-bold text-[24px] leading-[40px]">
            110,823
          </h2>
          <p className="text-[#6E8BB7] text-[14px] leading-6">Подписчики</p>
        </div>
        <div className="p-5 rounded-[6px] flex- items-center justify-center bg-[#e2EFFE]">
          <FaBell className="w-8 h-8 text-[#4094F7]" />
        </div>
      </li>
      <li className="flex items-center justify-between w-[271px] p-6 rounded-[6px] bg-white">
        <div>
          <h2 className="text-[#4094F7] mb-2 font-bold text-[24px] leading-[40px]">
            75
          </h2>
          <p className="text-[#6E8BB7] text-[14px] leading-6">Курьеры</p>
        </div>
        <div className="p-5 rounded-[6px] flex- items-center justify-center bg-[#e2EFFE]">
          <FaCar className="w-8 h-8 text-[#4094F7]" />
        </div>
      </li>
    </ul>
  );
};

export default NumbersData;
