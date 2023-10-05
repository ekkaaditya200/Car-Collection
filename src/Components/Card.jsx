import React, { useState } from 'react';
import data from '../assets/car.json';
import { AiOutlineHeart } from "react-icons/ai";
import { RiBuildingLine } from "react-icons/ri";
import Button from './Button';


// PropertyDetails Component
const PropertyDetails = (props) => {
    return (
        <div className="text-black flex justify-between  mx-5 mt-3">
            <p className="flex items-center text-md gap-1 font-[500]  ">
                {props.name}
            </p>
            <p className="text-left mx-1.5 mt-1 text-sm font-[500] border-2 border-dashed  border-blue-300 py-[3px] px-3 rounded-2xl">
                {props.year}
            </p>
        </div>
    );
};

// BuildingInfo Component
const BuildingInfo = () => {
    const num = 15;
    return (
        <>
            <div className="text-blue-400 flex text-2xl  justify-start mt-3 mx-6 gap-4">
                <div>
                    {[1, 2].map((item) => (
                        <div key={item} className="flex gap-1  justify-justify start">
                            <RiBuildingLine />
                            <span className="text-[10px]">
                                {num} {num == 1 ? "room" : "rooms"}
                            </span>
                        </div>
                    ))}
                </div>
                <div>
                    {[1, 2].map((item) => (
                        <div key={item} className="flex gap-1  justify-start">
                            <RiBuildingLine />
                            <span className="text-[10px]">
                                {num} {num == 1 ? "room" : "rooms"}
                            </span>
                        </div>
                    ))}
                </div>

            </div>
            <div className="w-full flex justify-center">
                <div className="h-[1px] w-[90%] bg bg-blue-200 m my-2 "></div>
            </div>
        </>

    );
};

// PriceAndReadMore Component
const PriceAndReadMore = () => {
    return (
        <div className="flex justify-between mx-5 items-center my-1 ">
            <p>
                <span className="text-blue-500 text-xl font-[500] ">$620</span>
                <span className="text-sm text-black ml-1">/month</span>
            </p>

            <div className="flex gap-2">
                <button className="text-blue-400 text-2xl bg-blue-200 p-1.5 rounded-xl">
                    <AiOutlineHeart></AiOutlineHeart>
                </button>
                <button className=" font-[500] border bg-blue-500 p-1 text-white rounded-xl px-2 py-1.5">
                    Read more
                </button>
            </div>
        </div>
    );
};

function Card({cardsToShow}) {

    return (
        <>
            {cardsToShow.map((item) => (
                <div key={item.id} className="w-[300px] h-[365px] glassmorphism rounded-2xl bg-red-500 shadow flex flex-col ">
                    <div className="rounded-xl overflow-hidden z-10 mt-[10px] relative mx-2">
                        <img src={item.image_url} alt="image1" className="w-full h-full object-cover " />
                    </div>

                    <PropertyDetails name={item.car_name} year={item.make_year} />
                    <BuildingInfo />
                    <PriceAndReadMore />
                </div>
            ))}

        </>
    );
}

export default Card;