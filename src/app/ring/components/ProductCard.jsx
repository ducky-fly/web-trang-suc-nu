"use client";
import React from "react";
import HeartIcon from "../../../assets/icons/heart_icon";

const ProductCard = ({ item, isFavorite, onToggleFavorite }) => {
  return (
    <div className="w-[250px] h-[350px] flex flex-col justify-around border border-[#D6D6D6] hover:shadow-xl transition-shadow duration-300 rounded-md cursor-pointer relative">
      {item?.ProductImages?.map((img, idx) => (
        <div key={idx}>{img.is_main === true && <img src={img.image_url} />}</div>
      ))}
      <div className="text-[20px] font-medium ml-[15px]">{item?.name}</div>
      <div className="text-[16px] text-[#C0C0C0] mt-[20px] mb-[10px] ml-[15px]">{item?.price}</div>
      <div className=" absolute top-[10px] right-[10px]">
        <HeartIcon isFavorite={isFavorite} onClick={onToggleFavorite} />
      </div>
    </div>
  );
};

export default ProductCard;

