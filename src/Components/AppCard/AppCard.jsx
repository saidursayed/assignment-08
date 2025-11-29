import React from "react";
import { FiDownload } from "react-icons/fi";
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router";

const AppCard = ({ app }) => {
  const {id, image, title, downloads,ratingAvg } = app;
  return (
    <Link to={`/apps/${id}`}>
    <div className="card bg-white shadow-sm p-4 cursor-pointer hover:scale-103 transition ease-in-out">
      <figure className="bg-[#d9d9d9] p-8 rounded-lg">
        <img
          src={image}
          alt=""
        />
      </figure>
      <div>
        <h2 className="font-medium text-xl py-4">{title}</h2>
        
        <div className="flex justify-between">
          <div className="flex items-center py-1.5 px-2.5 bg-[#F1F5E8] font-medium text-[#00D390] gap-2 text-base rounded-sm">
            <FiDownload /> 
            <span>{downloads}M</span>
          </div>
          <div className="flex items-center py-1.5 px-2.5 bg-[#FFF0E1] font-medium text-[#FF8811] gap-2 text-base rounded-sm">
            <FaStar />
            <span>{ratingAvg}</span>
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default AppCard;
