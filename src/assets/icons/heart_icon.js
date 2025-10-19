import React from "react";

const HeartIcon = ({ isFavorite = false, onClick }) => {
  return (
    <svg
      onClick={onClick}
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill={isFavorite ? "red" : "none"}
      xmlns="http://www.w3.org/2000/svg"
      className="cursor-pointer transition-colors duration-300"
    >
      <path
        d="M20.87 3.75C18.315 3.75 16.1088 5.24625 15 7.42875C13.8912 5.24625 11.685 3.75 9.13 3.75C5.4675 3.75 2.5 6.82125 2.5 10.6012C2.5 14.3812 4.77125 17.8463 7.70625 20.6925C10.6413 23.5388 15 26.25 15 26.25C15 26.25 19.2175 23.5838 22.2937 20.6925C25.575 17.61 27.5 14.3925 27.5 10.6012C27.5 6.81 24.5325 3.75 20.87 3.75Z"
        stroke={isFavorite ? "red" : "black"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default HeartIcon;
