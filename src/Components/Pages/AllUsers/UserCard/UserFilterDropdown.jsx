import React, { useState } from "react";

const UserFilterDropdown = ({ onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("All Users");

  const options = ["All Users", "Active Users", "Blocked Users"];

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
    if (onSelect) onSelect(option);
  };

  return (
    <div className="relative inline-block w-40 text-left mt-4">
      {/* Dropdown button */}
      <button
        type="button"
        className="flex w-full text-sm justify-between items-center bg-white px-4 py-2 text-black font-medium shadow-md rounded-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selected}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`h-5 w-5 transition-transform duration-200 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute z-50 mt-1 w-full bg-gray-100 rounded-md shadow-lg">
          {options.map((option) => (
            <button
              key={option}
              onClick={() => handleSelect(option)}
              className={`block text-sm w-full text-left px-4 py-2 font-semibold text-gray-700 hover:bg-gray-200 hover:text-black ${
                selected === option ? "bg-gray-200" : ""
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserFilterDropdown;