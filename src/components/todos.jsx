import React from "react";
import { HiTrash } from "react-icons/hi";

export default function Todos({ darkMode, data, handleDel, handleUpdate }) {
  return (
    <ul>
      {data.map((todoData) => {
        return (
          <li key={`todo-${todoData.name}`}>
            <div className="flex justify-between w-full px-4 py-2">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id={`chk-${todoData.name}`}
                  className="mr-1 peer"
                  defaultChecked={todoData.completed}
                  onChange={() => handleUpdate(todoData.name)}
                />
                <label
                  htmlFor={`chk-${todoData.name}`}
                  className={`peer-checked:line-through ${
                    darkMode ? "text-white" : "text-[#333333]"
                  }`}
                >
                  {todoData.name}
                </label>
              </div>
              <button
                className="flex justify-center items-center w-[24px] h-[24px] bg-[#D6D6D6] rounded-full"
                onClick={() => handleDel(todoData.name)}
              >
                <HiTrash
                  className="text-[#555555]"
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
