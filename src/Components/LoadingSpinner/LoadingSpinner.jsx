import React from "react";
import Logo from "../../assets/logo.png";

const LoadingSpinner = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-white ">
      <p className="text-3xl text-[#627282] font-semibold flex items-center gap-2 animate-zoom-text">
        <span>L</span>
        <img
          src={Logo}
          className="w-10 inline-block animate-spin-slow"
          alt="Loading"
        />
        <span>OADING</span>
      </p>
    </div>
  );
};

export default LoadingSpinner;
