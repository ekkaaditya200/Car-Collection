import React, { useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";
import data from '../assets/car.json';
const Header = () => {
  const options = ["option2", "option3", "option4", "option5"];
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("good");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredIds, setFilteredIds] = useState([]);
console.log(filteredIds)
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };


  useEffect(() => {
    // Filter data based on the search query and get matching IDs
    const matchingIds = data.cars.filter((item) =>
        item.car_name.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .map((item) => item.id);
    
    // Update the filtered IDs state
    setFilteredIds(matchingIds);
  }, [searchQuery]);
  return (
    <div className="glassmorphism py-3 px-2.5 flex shadow gap-7 items-center w-[80%] ">
      <div className="flex items-center px-1 py-1 rounded-[13px] bg-white text-gray-600 shadow-none">
        
      <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none px-2"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      <span className="px-2 cursor-pointer">  <AiOutlineSearch /></span>
      </div>
      <div className="relative inline-block text-gray-600">
        {/* <button
          onClick={toggleDropdown}
          className="flex items-center space-x-1"
        >
          <p>{selectedOption}</p>
         <span className="text-sm"> <BsChevronDown /></span>
        </button> */}
        {/* {isOpen && (
          <div className="absolute mt-2 py-1 mx-[-8%] bg-white border border-gray-300 rounded-lg shadow-lg z-90">
            {options.map((option) => (
              <span
                key={option}
                onClick={() => selectOption(option)}
                className="block px-4 py-2 cursor-pointer hover:bg-gray-200"
              >
                {option}
              </span>
            ))}
          </div>
        )} */}
      </div>
    </div>
  );
};

export default Header;
