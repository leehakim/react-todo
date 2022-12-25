import React from "react";
import { HiTrash } from "react-icons/hi";

export default function Todos({ data, handleDel, darkMode }) {
  return (
    <ul>
      {data.map((todoData, idx) => {
        return (
          <li key={idx}>
            <div className="flex justify-between w-full px-4 py-2">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className={`mr-1 peer/chk`}
                  defaultChecked={todoData.completed}
                />
                <span
                  className={`peer-checked/chk:line-through ${
                    darkMode ? "text-white" : "text-[#333333]"
                  }`}
                >
                  {todoData.name}
                </span>
              </label>
              <button
                className="flex justify-center items-center w-[24px] h-[24px] bg-[#D6D6D6] rounded-full"
                onClick={() => handleDel(todoData.name)}
              >
                <HiTrash
                  className={`${darkMode ? "text-white" : "text-[#555555]"}`}
                  aria-hidden="true"
                  focusable="false"
                  role="img"
                />
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
