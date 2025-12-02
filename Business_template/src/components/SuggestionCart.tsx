import React from "react";
import groupIcon from "/assets/Group.svg";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";

type SuggestionFoodProps = {
  image: string;
  name: string;
  //   description: string;
  //   price: number;
  onAdd?: (count: number) => void;
  onViewAR?: () => void;
};

const SuggestionFoodCard: React.FC<SuggestionFoodProps> = ({
  image,
  name,
  //   price,
  //   description,
  onAdd,
  onViewAR,
}) => {
  const [count, setCount] = useState(0);
  const handleAdd = () => {
    const newCount = count + 1;
    setCount(newCount);
    onAdd?.(newCount);
  };

  const handleRemove = () => {
    const newCount = count - 1;
    setCount(newCount);
    onAdd?.(newCount);
  };
  return (
    <div className="w-full px-2 bg-white shadow-md hover:shadow-lg transition-all duration-300">
      <div className="text-xl pb-2 text-center underline md:text-xl font-extrabold bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent tracking-wide">
        {name}
      </div>
      <div className="w-auto h-40 md:h-62 rounded-xl overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="flex flex-col mt-2 md:mt-4 md:gap-3 gap-1.5 w-full  mx-auto">
        <button
          onClick={onViewAR}
          className="
      flex items-center justify-center gap-2
      border border-gray-400 text-gray-900 
      shadow-[0_4px_20px_rgba(0,0,0,0.4)] 
      rounded-md 
      py-2 md:py-4 
      text-sm md:text-xl font-medium
      hover:bg-yellow-50 
      transition-all duration-300
      w-full
    "
        >
          <span>What's Inside</span>
          <img
            src={groupIcon}
            alt="AR icon"
            className="h-5 w-5 md:h-7 md:w-7"
          />
        </button>

        {count === 0 ? (
          <button
            onClick={onAdd}
            className="
        flex items-center justify-center gap-2
        border border-gray-600/50 
        bg-gradient-to-l from-gray-900 to-gray-600 backdrop-blur-md
        rounded-md 
        py-2 md:py-3 px-4 
        text-white 
        shadow-[0_4px_20px_rgba(0,0,0,0.4)]
        hover:shadow-[0_0_20px_rgba(228,179,1,0.3)]
        transition-all duration-300
        text-base md:text-lg font-bold
        w-full
      "
          >
            <IoMdAdd size={22} className="md:size-6" /> Add
          </button>
        ) : (
          <div
            className="
        flex items-center justify-between gap-3 
        border border-gray-600/50 
        bg-gradient-to-l from-gray-900 to-gray-600 backdrop-blur-md
        rounded-md 
        py-2 md:py-3 px-4 
        text-white 
        shadow-[0_4px_20px_rgba(0,0,0,0.4)]
        hover:shadow-[0_0_20px_rgba(228,179,1,0.3)]
        transition-all duration-300
        w-full
      "
          >
            <button
              onClick={handleRemove}
              className="text-lg md:text-xl text-gray-200 hover:text-[#e4b301] transition-transform hover:scale-110"
            >
              <FaMinus />
            </button>

            <span className="text-base md:text-lg font-semibold text-gray-100">
              {count}
            </span>

            <button
              onClick={handleAdd}
              className="text-lg md:text-xl text-gray-200 hover:text-[#e4b301] transition-transform hover:scale-110"
            >
              <FaPlus />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SuggestionFoodCard;
