import React from "react";
import { HiSun, HiMoon } from "react-icons/hi";

export default function Filter({
  all,
  handleAll,
  completed,
  handleCompleted,
  darkMode,
  handleDarkMode,
}) {
  return (
    <div
      className={`flex justify-between w-[500px] p-3 border-b ${
        darkMode
          ? "bg-[#1A1C33] border-b-[#353754]"
          : "bg-[#F6F6F6] border-b-[#EBEBEB]"
      }`}
    >
      <button
        type="button"
        className="flex justify-center items-center"
        onClick={() => handleDarkMode()}
      >
        {darkMode && (
          <HiSun
            className="text-white"
            aria-hidden="true"
            focusable="false"
            role="img"
          />
        )}
        {!darkMode && (
          <HiMoon
            className="text-[#D38142]"
            aria-hidden="true"
            focusable="false"
            role="img"
          />
        )}
      </button>
      <div className="flex space-x-4">
        <div>
          <input
            type="radio"
            name="filter"
            id="all"
            className="hidden peer/filterAll"
            defaultChecked
          />
          <label
            htmlFor="all"
            className="p-1 mt-[2px] border-b-[2px] text-[#D38142] font-medium border-b-transparent opacity-80 cursor-pointer peer-checked/filterAll:border-b-[#B3B3B3] peer-checked/filterAll:opacity-100"
          >
            All
          </label>
        </div>
        <div>
          <input
            type="radio"
            name="filter"
            id="actived"
            className="hidden peer/filterActived"
          />
          <label
            htmlFor="actived"
            className="p-1 mt-[2px] border-b-[2px] text-[#D38142] font-medium border-b-transparent opacity-80 cursor-pointer peer-checked/filterActived:border-b-[#B3B3B3] peer-checked/filterActived:opacity-100"
          >
            Actived
          </label>
        </div>
        <div>
          <input
            type="radio"
            name="filter"
            id="completed"
            className="hidden peer/filterCompleted"
          />
          <label
            htmlFor="completed"
            className="p-1 mt-[2px] border-b-[2px] text-[#D38142] font-medium border-b-transparent opacity-80 cursor-pointer peer-checked/filterCompleted:border-b-[#B3B3B3] peer-checked/filterCompleted:opacity-100"
          >
            Completed
          </label>
        </div>
      </div>
    </div>
  );
}
