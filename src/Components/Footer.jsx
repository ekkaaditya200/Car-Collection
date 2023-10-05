import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";
import {BiLeftArrowAlt, BiRightArrowAlt} from 'react-icons/bi'
import Button from "./Button";
const Footer = ({handlePageChange,currentPage,totalPages}) => {

 

  return (
    <div className="glassmorphism py-3 px-2.5 flex justify-between shadow gap-7 items-center w-[80%] text-gray-800  ">
     <div>
        <p><span>{currentPage}</span> <span className="text-sm">from</span> <span>{totalPages}</span></p>
     </div>
     <div className="flex gap-1">
        <button className="bg-white px-2.5 py-0.5 rounded-xl shadow-lg text-center" onClick={()=>{
          if(currentPage -1 > 0){
            handlePageChange(currentPage- 1)
          }
        }}><BiLeftArrowAlt/></button>
        
        {[...Array(totalPages).keys()].map((page) => (
                    <Button key={page} page={page} handlePageChange={handlePageChange} currentPage={currentPage} />
                ))}
        <button className="bg-white px-2.5 py-0.5 rounded-xl shadow-lg text-center" onClick={()=>{
          if(currentPage < totalPages ){
            handlePageChange(currentPage+ 1)
          }
        }} ><BiRightArrowAlt/></button>
     </div>
    </div>
  );
};

export default Footer;
